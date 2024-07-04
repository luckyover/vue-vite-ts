import { onMounted, onUnmounted } from "vue";

export function useTab(target) {
  let min = 0;
  let max = 0;
  let snapPoints = [];

  const createWrapDiv = (target) => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "flex items-center overflow-hidden");

    const prev = document.createElement("a");
    prev.setAttribute("href", "#");
    prev.setAttribute("class", "menu-horizontal-prev");

    const next = document.createElement("a");
    next.setAttribute("href", "#");
    next.setAttribute("class", "menu-horizontal-next");

    target.parentNode.insertBefore(newDiv, target);
    newDiv.appendChild(target);
    newDiv.appendChild(next);
    newDiv.insertBefore(prev, target);

    return { prev, next };
  };

  const getInfoElement = (target) => {
    const containerRect = target.getBoundingClientRect();
    const viewWidth = target.clientWidth + containerRect.left;
    snapPoints = Array.from(target.children);

    return { viewWidth, snapPoints };
  };

  const getStartEnd = (arrList, viewWidth) => {
    return arrList.reduce(
      (acc, item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.left >= 0 && rect.right <= viewWidth) {
          acc.min = Math.min(acc.min, index);
          acc.max = Math.max(acc.max, index);
        }

        return acc;
      },
      { min: 0, max: 0 }
    );
  };

  const scrollToItem = (index, arrList,parent) => {
    if (arrList[index]) {
    //   arrList[index].scrollIntoView({
    //     behavior: "smooth",
    //     block: "nearest",
    //     inline: "nearest",
    //   });
   
    const rect = arrList[index].getBoundingClientRect();
    const containerRect = parent.getBoundingClientRect();
    const viewWidth = parent.clientWidth + containerRect.left;
    if(rect.right > viewWidth){
        let t = viewWidth-rect.right
        parent.style.marginLeft = t +'px';
    }
   
    }
  };

  const handlePrev = (parent) => {
    if (min > 0) {
      min -= 2;
      max -= 2;
      console.log(12);
      scrollToItem(min, snapPoints,parent);
    }
  };

  const handleNext = (parent) => {
    console.log(12);
    if (max < snapPoints.length - 1) {
      max += 2;
      min += 2;
      scrollToItem(max, snapPoints,parent);
    }
  };

  onMounted(() => {
    const el = target.value;
        
    const { prev, next } = createWrapDiv(el);
    const { viewWidth } = getInfoElement(el);
    ({ min, max } = getStartEnd(snapPoints, viewWidth));


    prev.addEventListener("click", handlePrev(el));
    next.addEventListener("click", handleNext(el));
  });
  onUnmounted(() => {
    prev.removeEventListener("click", handlePrev(el));
    next.removeEventListener("click", handleNext(el));
  });
}
