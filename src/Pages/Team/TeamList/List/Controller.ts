import Isotope, { type IsotopeOptions } from "isotope-layout";

export class Controller {
  private width = 0;
  public masonry?: Isotope;
  private listNode?: HTMLElement;
  public static defaultOptions: IsotopeOptions = {
    layoutMode: "fitRows",
    fitRows: {
      gutter: 20,
    },
    stagger: 30,
  };
  private static readonly GUTTER_MULTIPLIER = 0.02;
  private options: IsotopeOptions = Controller.defaultOptions;
  private resizeObserver: ReturnType<typeof setTimeout> | null = null;

  public initialize(search = "") {
    if (!this.masonry) {
      this.createLayout();
    }
    if (search) {
      this.search(search);
    }
  }

  public registerNode(listNode: HTMLElement) {
    this.listNode = listNode;
  }

  public applyDOMUpdate() {
    this.masonry?.reloadItems();
  }

  public destroy() {
    this.masonry?.destroy();
  }

  public resize(width: number) {
    if (width === this.width) {
      return;
    }
    this.width = width;
    this.activateResizeObserver();
    this.createLayout(width * Controller.GUTTER_MULTIPLIER);
  }

  public search(search = "") {
    const lowered = search.toLowerCase();
    this.masonry?.arrange(
      this.merge({
        filter: node => {
          if (this.isValidElement(node)) {
            const name = node.querySelector(".name");
            if (this.isValidElement(name)) {
              return name.innerText.toLowerCase().includes(lowered);
            }
          }
          return false;
        },
      }),
    );
  }

  private merge(options: IsotopeOptions = {}) {
    this.options = Object.assign({}, this.options, options);
    return this.options;
  }

  private isValidElement(node: Element | null): node is HTMLElement {
    return !!node;
  }

  private createLayout(gutter = 20) {
    if (!this.listNode) {
      return;
    }
    if (gutter !== this.currentGutter) {
      this.merge({ fitRows: { gutter } });
    }
    if (this.masonry) {
      this.masonry.arrange(this.options);
    } else {
      this.masonry = new Isotope(this.listNode, this.options);
    }
  }

  private get currentGutter() {
    return this.options.fitRows?.gutter ?? 0;
  }

  private activateResizeObserver() {
    if (this.resizeObserver) {
      return;
    }
    this.options.transitionDuration = 0;
    this.resizeObserver = setTimeout(() => {
      this.resizeObserver = null;
      this.options.transitionDuration = 400;
      this.createLayout(this.width * Controller.GUTTER_MULTIPLIER);
    }, 100);
  }
}
