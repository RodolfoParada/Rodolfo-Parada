<template>
    <nav>
        <ul class="pagination justify-content-end">
            <li class="fw-bold me-2 d-flex align-items-center">{{ totalEntries }} Entradas</li>
            <li :class="{ 'page-item': true, disabled: currentPage === 1 }">
                <a class="page-link" @click="previousPage">Anterior</a>
            </li>

            <li :class="{ 'page-item': true, active: currentPage === 1 }">
                <a class="page-link" @click="goToPage(1)">1</a>
            </li>

            <li v-for="pageNumber in totalPages" :key="pageNumber"
                :class="{ 'page-item': true, active: currentPage === pageNumber }">
                <a v-if="pageNumber === 2 && !renderNumberPage(pageNumber) && totalPages > 2" class="page-link">...</a>
                <a v-if="renderNumberPage(pageNumber)" class="page-link" @click="goToPage(pageNumber)">{{ pageNumber }}</a>
                <a v-if="pageNumber === totalPages - 1 && !renderNumberPage(pageNumber) && totalPages > 2"
                    class="page-link">...</a>
            </li>
            <li v-if="totalPages > 1" :class="{ 'page-item': true, active: currentPage === totalPages }">
                <a class="page-link" @click="goToPage(totalPages)">{{ totalPages }}</a>
            </li>
            <li :class="{ 'page-item': true, disabled: currentPage === totalPages }">
                <a class="page-link" @click="nextPage">Siguiente</a>
            </li>
        </ul>
    </nav>
</template>
  
<script>
export default {
    props: {
        totalEntries: {
            type: Number
        },
        currentPage: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        }
    },
    methods: {
        previousPage() {
            if (this.currentPage > 1) {
                this.$emit('page-change', this.currentPage - 1);
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.$emit('page-change', this.currentPage + 1);
            }
        },
        goToPage(pageNumber) {
            this.$emit('page-change', pageNumber);
        },
        pages() {

        },
        renderNumberPage(page) {
            const visiblePages = 3
            const previous = this.currentPage - visiblePages
            const next = this.currentPage + visiblePages
            if (page >= previous && page <= next && page < this.totalPages && page > 1) {
                console.log('page 1', page);
                return true
            } else {
                console.log('page 2', page);
                return false
            }
        }
    }
};
</script>