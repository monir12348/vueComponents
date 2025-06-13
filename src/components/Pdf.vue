<script setup>
import { ref } from 'vue'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const article = ref()

const downloadPDF = async () => {
  const element = article.value
  const canvas = await html2canvas(element)

  const imgData = canvas.toDataURL('image/jpeg')
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })
 pdf.addImage(imgData, 'JPEG', 0, 0)
  pdf.save('resume.pdf')
}
</script>


<template>
  <div>
    <div ref="article" class="article-section">
      <h1>Mir Monir</h1>
      <p class="text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
        optio!
      </p>
    </div>

    <button @click="downloadPDF">pdf</button>
    <button>jpg</button>
  </div>
</template>

<style scoped>
.article-section {
  padding: 20px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
}
.text {
  width: 200px;
}
</style>
