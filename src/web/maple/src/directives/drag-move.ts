import type { Directive } from "vue";

const direct: Directive<HTMLElement> = {
  mounted(el: HTMLElement) {
    el.onmousedown =  (e: MouseEvent) => {
      const startX = e.offsetX;
      const startY = e.offsetY;

      const prevMouseMove = document.onmousemove;
      const prevMouseUp = document.onmouseup;

      document.onmousemove = (e: MouseEvent) => {
        e.preventDefault();
        const left = e.pageX - startX;
        const top = e.pageY - startY;
        el.style.left = left + 'px';
        el.style.top = top + 'px';
      };

      document.onmouseup = () => {
        document.onmousemove = prevMouseMove;
        document.onmouseup = prevMouseUp;
      }
    }
  },
  unmounted(el: HTMLElement) {
    el.onmousedown = null;
  }
}

const name = 'dragmove';

export const dragMoveDirect = {name, direct};