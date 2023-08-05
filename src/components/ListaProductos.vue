<template> 
  <div>
    <form>
      <div class="row">
        <div
          class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 col p-5"
          v-for="product in products" :key="product.id"
         
        >
          <div class="card card-item my-card">
            <img
              :src="product.imagen"
              class="card-img-top d-flex justify-content-center product-image"
              alt="Imagen del producto"
              id="cake"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.nombre  }}</h5>
              <p class="card-text">Precio: {{ product.precio  }}</p>
            </div>
            <div>
              <button
                type="button"
                @click="agregarAlCarrito(product)"
                class="btn btn-success mb-2"
              >
                Agregar Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template> 

<script>
import axios from 'axios';

export default {
  name: 'ListaProductos',
  data() {
    return {
      products: [],
      listProductos: {},
    };
  },
  mounted() {
    
  },
     created() {
    this.getProductos();
   


  },
  methods: {
    agregarAlCarrito(product) {
      this.$store.dispatch('addItem', product);
      console.log('selectedItems', this.$store.getters.selectedItems);

      localStorage.setItem('cartItems', JSON.stringify(this.$store.getters.selectedItems));
    },

    async getProductos() {
      try {
        const response = await axios.get('https://apiproductos-xhxy.onrender.com/listar');
        this.products = response.data;
        console.log("response", this.products)
      } catch (error) {
        console.error('no hay respuesta:', error);
      }
    },

  },
};
</script>



<style scoped>
.card-item {
  width: 400px; /* Ajusta el valor del ancho según tus necesidades */
  height: 400px; /* Ajusta el valor de la altura según tus necesidades */
}
.card-img-top {
  max-width: auto;
  max-height: 300px;
}
.my-card {
margin-bottom: 0px; /* Puedes ajustar el valor para controlar el espacio entre las tarjetas */

  }

.card-item {   
margin: 0px 100px 0px 100px;  /* Puedes ajustar el valor para controlar el espacio horizontal entre las tarjetas */
  }

</style>
