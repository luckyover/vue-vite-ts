import { onMounted, onUnmounted } from "vue";
import { debounce } from "@/composables/debounce.js";

export function useTab(target, options = {}) {

  let defaultOptions = {
    min: 0,
    max: 0,
    snapPoints: [],
    containerWidth: 0,
    containerRight: 0,
    containerLeft: 0,
    marginLeft: 0,
    el: null,
    step: 2,
  };

  options = {
    ...defaultOptions,
    ...options,
  };

  const createWrapDiv = () => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "flex items-center");

    const prev = document.createElement("a");
    prev.setAttribute("href", "#");
    prev.setAttribute("class", "menu-horizontal-prev");

    const next = document.createElement("a");
    next.setAttribute("href", "#");
    next.setAttribute("class", "menu-horizontal-next");

    options.el.parentNode.insertBefore(newDiv, options.el);
    newDiv.appendChild(options.el);
    newDiv.appendChild(next);
    newDiv.insertBefore(prev, options.el);

    const newWrapMenu = document.createElement("div");
    newWrapMenu.setAttribute("class", "overflow-hidden new-wrap-menu w-full");

    newDiv.insertBefore(newWrapMenu, options.el);
    newWrapMenu.appendChild(options.el);

    return { prev, next };
  };

  const getInfoElement = () => {
    const containerRect = options.el.getBoundingClientRect();
    options.containerWidth = options.el.clientWidth;
    options.containerLeft = containerRect.left;
    options.containerRight = options.containerLeft + options.containerWidth;
    options.snapPoints = Array.from(options.el.children);
  };

  const getStartEnd = (arrList) => {
    return arrList.reduce(
      (acc, item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.left >= 0 && rect.right <= options.containerRight) {
          acc.min = Math.min(acc.min, index);
          acc.max = Math.max(acc.max, index);
        }

        return acc;
      },
      { min: 0, max: 0 }
    );
  };

  const scrollToItem = (arrList,step,type) => {
    let isScroll = false;

    if (type == "prev" && options.min > 0) {
      const minStep = Math.min(options.min, step);
      options.min -= minStep;
      options.max -= minStep;
      isScroll = true;
    } else if (type === "next" && options.max < options.snapPoints.length - 1) {
      const maxStep = Math.min(options.snapPoints.length - 1 - options.max, step);
      options.max += maxStep;
      options.min += maxStep;
      isScroll = true;
    }
    
    let index = {
      next: options.max,
      prev: options.min,
    };

    if (arrList[index[type]] && isScroll) {
      const rect = arrList[index[type]].getBoundingClientRect();

      getInfoElement();

      const containerRectLeftCurrent =
        options.containerLeft - options.marginLeft;

      if (type == "next") {
        options.marginLeft += options.containerRight - rect.right;
        options.el.style.marginLeft = options.marginLeft + "px";
      }

      if (type == "prev") {
        options.marginLeft =
          options.marginLeft - (rect.left - containerRectLeftCurrent);
        options.el.style.marginLeft = options.marginLeft + "px";
      }
    }
  };

  //handle
  const handlePrev = debounce(() => {
    scrollToItem(options.snapPoints,options.step, "prev");
  }, 300);
  
  const handleNext = debounce(() => {
    scrollToItem(options.snapPoints,options.step, "next");
  },300);

  
  const handleBlur = debounce(function(e){
    getInfoElement();
    const rect = this.getBoundingClientRect();
    const containerRectLeftCurrent =
    options.containerLeft - options.marginLeft;
    let right =  options.containerRight + 30; 
    if(rect.right > right && rect.left < options.containerRight){
      scrollToItem(options.snapPoints,1, "next");
    }
   
   
    if(rect.left < containerRectLeftCurrent  && rect.right > containerRectLeftCurrent){
      scrollToItem(options.snapPoints,1, "prev");
    }
    const blurFinishedEvent = new CustomEvent('blurFinished', {
      detail: { element: this,type:e.type }
    });
    document.dispatchEvent(blurFinishedEvent);
    
  },100);
  
  const handleLeave = debounce(function(e){
    const blurFinishedEvent = new CustomEvent('leaveFinished', {
      detail: { element: this,type:e.type }
    });
    document.dispatchEvent(blurFinishedEvent);
    
  },110);

  onMounted(() => {
    options.el = target.value;
    const { prev, next } = createWrapDiv();
    //
    getInfoElement();
    //
    const { min, max } = getStartEnd(options.snapPoints);
    options.min = min;
    options.max = max;

    prev.addEventListener("click", handlePrev);
    next.addEventListener("click", handleNext);

    options.snapPoints.forEach(element => {
      element.addEventListener("mouseover", handleBlur);
      element.addEventListener("mouseleave", handleLeave);
    });
  });

  onUnmounted(() => {
    prev.removeEventListener("click", handlePrev);
    next.removeEventListener("click", handleNext);
    options.snapPoints.forEach(element => {
      element.removeEventListener("mouseover", handleBlur);
      element.removeEventListener("mouseleave", handleLeave);
    });
  });
}
