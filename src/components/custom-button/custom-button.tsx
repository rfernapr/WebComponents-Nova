import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'custom-button',
    styleUrl: 'custom-button.css',
    shadow: false,
	scoped: true,
})
export class CustomButton {

    /** Texto del botón */
    @Prop() text: string;

    /** Estilo del botón. primary: fondo amarillo / secondary: fondo azul */
    @Prop() theme: string = "primary";

    /** Propiedad que determina si se debe mostrar el borde del botón */
    @Prop() showBorder: boolean = true;

    /** Identificador de la modal que se debe abrir */
    @Prop() modalId?: string;
    

    /** Evento que se envia cuando debe abrirse la modal */
    @Event() openModal: EventEmitter<string>; 

    handleButtonClick = (e: MouseEvent) => {
        e.preventDefault();
        this.openModal.emit(this.modalId);
    }

    render() {
        return (
            <Host>
                <button 
                    class={`${this.theme} ${!this.showBorder ? "--no-border" : ""}`}
                    onClick={this.handleButtonClick}
                >
                    {this.text}
                </button>
            </Host>
        );
    }

}
