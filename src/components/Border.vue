<script setup>
import ContainerComponent from '../../../components/common/ContainerComponent.vue';
import searchImg from '../../../assets/images/search_product.png';
 //this code is for changing div's borderValue specific i mean last twodiv's and each 2nd div's border-r
const searchDetails = [
  {
    id: 1,
    search_img: searchImg,
    product_name: "Ajazz AK820 MAX Plus Tri-Mode Mechanica....",
    product_price_item: "1",
    product_price_math: "x",
    product_price_current: "৳3,200.00"
  },
  {
    id: 2,
    search_img: searchImg,
    product_name: "Ajazz AK680 Tri-Mode Mechanica....",
    product_price_item: "1",
    product_price_math: "x",
    product_price_current: "৳3,200.00"
  },
  {
    id: 3,
    search_img: searchImg,
    product_name: "Ajazz AK820 MAX Plus Tri-Mode Mechanica....",
    product_price_item: "1",
    product_price_math: "x",
    product_price_current: "৳3,200.00"
  },
  {
    id: 4,
    search_img: searchImg,
    product_name: "Ajazz AK680 Tri-Mode Mechanica....",
    product_price_item: "1",
    product_price_math: "x",
    product_price_current: "৳3,200.00"
  },
  {
    id: 5,
    search_img: searchImg,
    product_name: "Ajazz AK820 MAX Plus Tri-Mode Mechanica....",
    product_price_item: "1",
    product_price_math: "x",
    product_price_current: "৳3,200.00"
  },
  {
    id: 6,
    search_img: searchImg,
    product_name: "Ajazz AK680 Tri-Mode Mechanica....",
    product_price_item: "1",
    product_price_math: "x",
    product_price_current: "৳3,200.00"
  }
];
</script>

<template>
  <ContainerComponent>
    <v-row>
      <v-col>
        <div class="px-2 py-2 font-poppins">
          <!-- Tabs -->
          <div class="flex gap-2">
            <div class="py-2 px-3 bg-neutral-700 text-neutral-0 font-semibold text-[14px]">Products</div>
            <div class="py-2 px-3 bg-neutral-30 text-neutral-80 font-normal text-[14px]">Categories</div>
          </div>

          <!-- Product Grid + HR Bar -->
          <div class="flex gap-2 max-w-[526px]">
            <!-- Product Cards -->
            <div class="mt-3">
              <div class="grid grid-cols-2">
                <div
                  v-for="(searchdetail, index) in searchDetails"
                  :key="searchdetail.id"
                  :class="[
                    'flex items-center gap-[10px] pr-2',
                    'border-neutral-30',
                    <!--mainPoint-->
                    index < searchDetails.length - 2 ? 'border-b-2' : '',
                    index % 2 === 0 ? 'border-r-2' : ''
                  ]"
                >
                  <img :src="searchdetail.search_img" alt="" />
                  <div>
                    <p class="text-[14px] font-medium">{{ searchdetail.product_name }}</p>
                    <div class="flex gap-[4px] text-[12px]">
                      <span class="font-medium text-neutral-100">{{ searchdetail.product_price_item }}</span>
                      <span class="font-medium text-neutral-100">{{ searchdetail.product_price_math }}</span>
                      <span class="font-semibold text-primary-300">{{ searchdetail.product_price_current }}</span>
                    </div>
                  </div>
                </div>

                <!-- View All -->
                <router-link to="#">
                  <div class="col-span-2 mt-3 font-medium text-center border border-neutral-40 text-neutral-700 text-[14px] py-2 px-4">
                    View All Results
                  </div>
                </router-link>
              </div>
            </div>

            <!-- HR (Vertical Split Bar) -->
            <div class="flex flex-col w-[4px] h-auto">
              <div class="w-full h-1/2 bg-neutral-40"></div>
              <div class="w-full h-1/2 bg-primary-300"></div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </ContainerComponent>
</template>
