interface CardConstructor {
  getConfigElement(): Promise<HTMLElement>;
}
interface CardHelpers {
  createCardElement(config: {
    type: string;
  }): HTMLElement | Promise<HTMLElement>;
}

/** HA loads form controls lazily. Ask its native button editor to load their owner. */
export async function createEditor(tag: string): Promise<HTMLElement> {
  if (!customElements.get("ha-form")) {
    const host = window as unknown as Window & {
      loadCardHelpers(): Promise<CardHelpers>;
    };
    const helpers = await host.loadCardHelpers();
    const native = await helpers.createCardElement({ type: "button" });
    await (native.constructor as unknown as CardConstructor).getConfigElement();
  }
  return document.createElement(tag);
}
