import * as Yup from "yup";

export const SchemaRegisterCars = Yup.object().shape({
    name:Yup.string().required("campo obrigatório"),
    licenseplate: Yup.string().required("campo obrigatório"),
    price: Yup.string().required("campo obrigatório"),
    duration: Yup.string().required("campo obrigatório")
});


   