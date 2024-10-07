document.querySelectorAll('.delete-form').forEach(form => {
    form.onsubmit = async function (e) {
        e.preventDefault();

        const productId = this.action.split('/').pop();

        const response = await fetch(`/products/admin/${productId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert("Producto eliminado correctamente");
            location.reload();
        } else {
            alert("Error al eliminar el producto");
        }
    };
});
