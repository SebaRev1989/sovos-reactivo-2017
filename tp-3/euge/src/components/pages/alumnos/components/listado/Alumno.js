import React from 'react';

class Alumno extends React.Component {
    render () {
        return (
            <div>
                <AlumnoHeader nombre = {this.props.alumno.nombre} />
                <AlumnoContent estado = {this.props.alumno.estado} />
			      </div>
        );
    }
}

export default Alumno;
