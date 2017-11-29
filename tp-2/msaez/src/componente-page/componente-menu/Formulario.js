import React from 'react';
import './leftmenu.scss'

class Formulario extends React.Component{
    constructor(){
        super();
        this.noticia = {};
    };

    handleTituloChange =(evt)=>{
        this.noticia.titulo = evt.target.value;
    };

    handleContenidoChange =(evt)=>{
        this.noticia.contenido = evt.target.value;
    };

    handleAutorChange =(evt)=>{
        this.noticia.creador = evt.target.value;
    };

    handleSaveClick =(evt)=>{
        this.props.onSave(this.noticia);
        this.noticia = {};
    }; 


    render() {
        const estilo = { border: "1px solid red", width: "100%"};
        return (
            <div className="sub_menu">
                <div>Agregar Nueva Noticia</div>
                <form>
                    <label>Titulo</label>
                    <input type="text" style={estilo} onChange={this.handleTituloChange} />
                    <label>Contenido</label>
                    <input type="text" style={estilo} onChange={this.handleContenidoChange} />
                    <label>Autor</label>
                    <input type="text" style={estilo} onChange={this.handleAutorChange} />
                    <input type="button" value="publicar" onClick={this.handleSaveClick} />
                </form> 
            </div>
        );
    }
}

export default Formulario;