import Cliente from "../models/Cliente"

export const renderCliente = async (req, res) => {
  console.log("Renderizando vista de clientes...");
  const clientes = await Cliente.find().lean();
  res.render("indexClientes", { clientes });
};


export const createCliente = async (req, res) => {
    try {
        const cliente = new Cliente(req.body);
        const ClienteAlmacenado = await cliente.save();
        console.log(ClienteAlmacenado);
        res.redirect("/clientes");
    } catch (error) {
        console.log(error);
    }
};

export const renderEditCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id).lean();
        res.render('editarCliente', {cliente});
    } catch (error) {
        console.log(error.message);
    }
};

export const updateCliente = async (req, res) => {
    const { id } = req.params;
    await Cliente.findByIdAndUpdate(id, req.body);
    res.redirect("/clientes");
};

export const deleteCliente = async (req, res) => {
    const { id } = req.params;
    await Cliente.findByIdAndDelete(id);
    res.redirect("/clientes");
};

export const statusCliente = async (req, res) => {
    const { id } = req.params;
    const cliente = await Cliente.findById(id);
    cliente.activo = !cliente.activo;
    await cliente.save();
    res.redirect("/clientes"); 
};
