import { Component, Host, h, Prop, State, Listen } from '@stencil/core';

@Component({
    tag: 'custom-modal',
    styleUrl: 'custom-modal.css',
    shadow: false,
    scoped: true
})
export class CustomModal {

    @Prop() modalId: string;

    @State() isOpened: boolean = false;

    @Listen("openModal", { target: 'window' })
    onOpenModal(event: CustomEvent) {
        if (event.detail === this.modalId) {
            this.isOpened = true;
        }
    }

    closeModal = (e: MouseEvent) => {
        e.preventDefault();
        this.isOpened = false;
    }

    render() {
        return (
            <Host>
                <div class={`custom-modal-content ${!this.isOpened ? "hidden" : ""}`}>
                    <slot name="content"></slot>
                    <button onClick={this.closeModal}>Cerrar</button>
                </div>
            </Host>
        );
    }

}
