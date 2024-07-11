import { onMounted, onUnmounted , Ref  } from "vue";
import { debounce } from "@/composables/debounce.ts";

interface Options {
  min: number;
  max: number;
  snapPoints: Element[];
  containerWidth: number;
  containerRight: number;
  containerLeft: number;
  scrollWidth: number;
  marginLeft: number;
  el: HTMLElement | null;
  step: number;
  prev: HTMLAnchorElement ;
  next: HTMLAnchorElement ;
}

export function useTab(target: Ref<HTMLElement | null>, optionsInput:Partial<Options> = {}) {
  let options:Options  = {
    min: 0,
    max: 0,
    snapPoints: [],
    containerWidth: 0,
    containerRight: 0,
    containerLeft: 0,
    marginLeft: 0,
    scrollWidth: 0,
    el: {} as HTMLElement,
    step: 2,
    prev: {} as HTMLAnchorElement,
    next: {} as HTMLAnchorElement,
    ...optionsInput,
  };

  

  const createWrapDiv = () => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "flex items-center");
    let prev = null,
      next = null;
    prev = document.createElement("a");
    prev.setAttribute("href", "#");
    prev.setAttribute("class", "menu-horizontal-prev disabled");

    next = document.createElement("a");
    next.setAttribute("href", "#");
    next.setAttribute("class", "menu-horizontal-next");

    if (options.el && options.el.parentNode) {
      options.el.parentNode.insertBefore(newDiv, options.el);
      newDiv.appendChild(options.el);
      newDiv.appendChild(next);
      newDiv.insertBefore(prev, options.el);

      const newWrapMenu = document.createElement("div");
      newWrapMenu.setAttribute("class", "overflow-hidden new-wrap-menu w-full");

      newDiv.insertBefore(newWrapMenu, options.el);
      newWrapMenu.appendChild(options.el);
    }

    return { prev, next };
  };

  const getInfoElement = () => {
    if (options.el) {
      const containerRect = options.el.getBoundingClientRect();
      options.containerWidth = options.el.clientWidth;
      options.scrollWidth = options.el.scrollWidth;
      options.containerLeft = containerRect.left;
      options.containerRight = options.containerLeft + options.containerWidth;
      options.snapPoints = Array.from(options.el.children) as Element[];
    }
   
  };

  const getStartEnd = (arrList:Element[]) => {
    return arrList.reduce(
      (acc, item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.left >= 0 && rect.right <= options.containerRight) {
          acc.min = Math.min(acc.min, index);
          acc.max = Math.max(acc.max, index);
        }

        return acc;
      },
      { min: 0, max: 0}
    );
  };

  const scrollToItem = (arrList: Element[], step: number, type: "prev" | "next") => {
    let isScroll = false;

    if (type == "prev" && options.min > 0) {
      const minStep = Math.min(options.min, step);
      options.min -= minStep;
      options.max -= minStep;
      isScroll = true;
    } else if (type === "next" && options.max < options.snapPoints.length - 1) {
      const maxStep = Math.min(
        options.snapPoints.length - 1 - options.max,
        step
      );
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
        if(options.el) options.el.style.marginLeft = options.marginLeft + "px";
      }

      if (type == "prev") {
        options.marginLeft =
          options.marginLeft - (rect.left - containerRectLeftCurrent);
          if(options.el) options.el.style.marginLeft = options.marginLeft + "px";
      }

      options.prev.classList.toggle("disabled", options.min == 0);
      options.next.classList.toggle(
        "disabled",
        options.max == options.snapPoints.length - 1
      );
    }
  };

  //handle
  const handlePrev = debounce(() => {
    scrollToItem(options.snapPoints, options.step, "prev");
  }, 300);

  const handleNext = debounce(() => {
    scrollToItem(options.snapPoints, options.step, "next");
  }, 300);

  const handleBlur = debounce(function (this: HTMLElement) {
    getInfoElement();
    const rect = this.getBoundingClientRect();
    const containerRectLeftCurrent = options.containerLeft - options.marginLeft;
    let right = options.containerRight + 30;
    if (rect.right > right && rect.left < options.containerRight) {
      scrollToItem(options.snapPoints, 1, "next");
    }

    if (
      rect.left < containerRectLeftCurrent &&
      rect.right > containerRectLeftCurrent
    ) {
      scrollToItem(options.snapPoints, 1, "prev");
    }
  }, 100);

  onMounted(() => {
    options.el = target.value;

    const { prev, next } = createWrapDiv();
    options.prev = prev;
    options.next = next;
    //
    getInfoElement();
    //

    if( options.containerWidth == options.scrollWidth){
      options.prev.classList.add('hidden')
      options.next.classList.add('hidden')
    }
    const { min, max } = getStartEnd(options.snapPoints);
    options.min = min;
    options.max = max;

    prev.addEventListener("click", handlePrev);
    next.addEventListener("click", handleNext);

    options.snapPoints.forEach((element) => {
      element.addEventListener("mouseover", handleBlur);
    });
  });

  onUnmounted(() => {
    options.prev.removeEventListener("click", handlePrev);
    options.next.removeEventListener("click", handleNext);
    options.snapPoints.forEach((element) => {
      element.removeEventListener("mouseover", handleBlur);
    });
  });
}
