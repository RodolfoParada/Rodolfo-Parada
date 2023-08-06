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
    
  <Pagination
      :totalEntries="totalEntries"
      :currentPage="currentPage"
      :totalPages="totalPages"
      @page-change="handlePageChange"
    />
  </div>
</template> 

<script>

import Pagination from '../components/pagination.vue';
import axios from 'axios';

export default {
  name: 'ListaProductos',
  components: {
   Pagination,
    
  },
  data() {
    return {
      products: [],
      listProductos: {},
      currentPage: 1,
      itemsPerPage: 6
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
  previousPage() {
      this.currentPage -= 1;
    },
    // Cambiar a la página siguiente
    nextPage() {
      this.currentPage += 1;
    },
    // handlePageChange(newPage) {
    //   this.currentPage = newPage;
    // },
     computed: {
      totalEntries() {
        // Calculate the total number of items
        // return this.yourDataArray.length;
        return this.products.length;
      },
      totalPages() {
        // Calculate the total number of pages
        return Math.ceil(this.totalEntries / this.itemsPerPage);
      },
      paginatedItems() {
        // Slice your data array to get the items for the current page
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.products.slice(startIndex, endIndex);
       },
      totalPages() {
        return Math.ceil(this.allData.length / this.itemsPerPage);
      },
      // Datos paginados
      paginatedData() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.allData.slice(startIndex, endIndex);
      },
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
