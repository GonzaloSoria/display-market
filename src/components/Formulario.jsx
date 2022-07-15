import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

const Formulario = () => {
    const [form_sent, setFormSent] = useState(false);
    const [users, setUsers] = useState([])
    // Mostrar por consola los usuarios que envian el formulario
    console.log(users);

    return (
        <>
            <Formik 
                initialValues={{
                    name: '',
                    email: ''
                }}
                validate={(values) => {
                    let errores = {}

                    // Validacion para nombre
                    if(values.name === '') {
                        errores.name = 'Por favor ingrese un nombre';
                    } else if (values.name.length < 3) {
                        errores.name = 'Tiene que poner un minimo de 2 caracteres';
                    } else if (!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(values.name)) {
                        errores.name = 'El nombre solo puede tener letras y espacios';
                    }

                    // Validacion para email
                    if(values.email === '') {
                        errores.email = 'Por favor ingrese un email';
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                        errores.email = 'El email solo puede tener letras, numeros, puntos y guiones';
                    }

                    return errores;
                }}
                onSubmit={(values, {resetForm}) => {
                    resetForm();
                    // Guardar los usuarios en un estado simulando una BD
                    setUsers([...users, {name: values.name, email: values.email}]);
                    setFormSent(true);
                    setTimeout(() => {
                        setFormSent(false);
                    }, 5000);
                }}
            >
                {({errors}) => (
                    <Form className="pt-5 pb-3 px-4 mt-5 shadow">
                        <h3 className="text-start text-md-center">Contactanos</h3>
                        <p className="text-start text-md-center">Dejanos tus datos y te <br />contactaremos a la brevedad</p>
                        <div className="d-flex flex-column my-3">
                            <label htmlFor="nombre" className="mb-3">Nombre</label>
                            <Field
                                type="text"
                                id="name"
                                name="name" 
                                placeholder="Cosme Fulanito"
                            />
                            <ErrorMessage name="name" component={() => (
                                <p className="error mb-0">{errors.name}</p>
                            )}/>
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="email" className="mb-3">Email</label>
                            <Field 
                                type="email"
                                id="email"
                                name="email" 
                                placeholder="ejemplo@gmail.com"
                            />
                            <ErrorMessage name="email" component={() => (
                                <p className="error mb-0">{errors.email}</p>
                            )}/>
                        </div>
                        <div className="text-center mt-5">
                            <button type="submit">Enviar</button>
                            {
                                !form_sent ?
                                    <p className="form-succes mt-3" style={{visibility: 'hidden'}}>El Formulario se envió correctamente</p>
                                    :
                                    <p className="form-succes mt-3" style={{visibility: 'visible'}}>El Formulario se envió correctamente</p>
                            }
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default Formulario;