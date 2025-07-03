//parent table driversData
<script setup>
import ContainerComponent from "./ContainerComponent.vue";
import Heading from "./Heading.vue";
import { IconSearch } from "@tabler/icons-vue";
import { ref, computed } from "vue";
import Table2 from "./Table2.vue";

const dataTable = [
  {
    id: 1,
    name: "Ajazz Ak820 Max Plus Driver",
    brand: "Ajazz",
    model: "Ak820",
    capability: "Windows/Mac",
  },
  {
    id: 2,
    name: "Ajazz Ak820 Max Plus Driver",
    brand: "Rayans",
    model: "Ak820",
    capability: "Windows/Mac",
  },
  {
    id: 3,
    name: "Ajazz Ak820 Max Plus Driver",
    brand: "StarTech",
    model: "Ak820",
    capability: "Windows/Mac",
  },
  {
    id: 4,
    name: "Ajazz Ak820 Max Plus Driver",
    brand: "Ajazz",
    model: "Ak820",
    capability: "Windows/Mac",
  },
  {
    id: 5,
    name: "Ajazz Ak820 Max Plus Driver",
    brand: "Rayans",
    model: "Ak820",
    capability: "Windows/Mac",
  },
  {
    id: 6,
    name: "Ajazz Ak820 Max Plus Driver",
    brand: "StarTech",
    model: "Ak820",
    capability: "Windows/Mac",
  },
];

const tabData = [
  { id: 1, tabItem: "Drivers..." },
  { id: 2, tabItem: "Software..." },
  { id: 3, tabItem: "Hardware..." },
];

const activeTab = ref(1);
//changing value of searchInput

const changeTypeValue = computed(() => {
const currentTab= tabData.find(tab=>tab.id===activeTab.value)
return currentTab?`Search for ${currentTab.tabItem}...`:''
});
//filter from array
const filterInput=ref("")
const filterdData=computed(()=>{
  return dataTable.filter(Data=>Data.brand.toLowerCase().includes(filterInput.value.toLowerCase()))
})
</script>
<template>
  <div>
    <ContainerComponent>
      <div class="mt-16">
        <Heading>
          <template #heading>Data Tables</template>
          <template #bodyText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab placeat
            sit laborum suscipit nobis vero, ex quos minus qui! Quasi veritatis
            consectetur ex dolor, quisquam id explicabo expedita commodi ea.
          </template>
        </Heading>

        <!-- Tabs -->
        <section class="mt-12">
          <div class="flex gap-2 flex-wrap">
            <div
              v-for="tab in tabData"
              :key="tab.id"
              @click="activeTab = tab.id"
              class="px-3 py-3 cursor-pointer"
              :class="
                activeTab === tab.id
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-500'
              "
            >
              {{ tab.tabItem }}
            </div>
          </div>
        </section>
        <!--input-->
        <section class="mt-6 mp-5">
          <div class="border border-gray-300 w-full pl-5 py-3 flex gap-2">
            <IconSearch stroke="{2}" />
            <input
              type="text"
              v-model="filterInput"
              :placeholder="changeTypeValue"
              class="outline-none text-md placeholder:text-gray-700"
            />
          </div>
        </section>
        <!-- DRIVERS TAB -->
        <section v-if="activeTab === tabData[0].id">
          <!-- Desktop Table -->
          <div class="w-full mt-4 hidden md:block" v-if="filterdData.length>0">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-500">
                  <th
                    class="text-sm text-left py-2 px-4 text-gray-500 font-medium"
                  >
                    Name
                  </th>
                  <th class="text-sm px-4 text-gray-500 font-medium">Brand</th>
                  <th class="text-sm px-4 text-gray-500 font-medium">Model</th>
                  <th class="text-sm px-4 text-gray-500 font-medium">
                    Software Capability
                  </th>
                  <th class="text-sm px-4 text-gray-500 font-medium">Links</th>
                </tr>
              </thead>
              <tbody >
                <tr
                  v-for="data in filterdData"
                  :key="data.id"
                  class="border-b border-gray-500 hover:bg-gray-50 cursor-pointer"
                >
                  <td
                    class="py-6 px-4 text-left text-sm font-medium text-gray-800"
                  >
                    {{ data.name }}
                  </td>
                  <td
                    class="text-center px-4 text-sm font-medium text-gray-800"
                  >
                    {{ data.brand }}
                  </td>
                  <td
                    class="text-center px-4 text-sm font-medium text-gray-800"
                  >
                    {{ data.model }}
                  </td>
                  <td
                    class="text-center px-4 text-sm font-medium text-gray-800"
                  >
                    {{ data.capability }}
                  </td>
                  <td class="text-center px-4 text-sm font-medium">
                    <span class="bg-gray-800 text-white py-3 px-6"
                      >Download</span
                    >
                  </td>
                </tr>
              </tbody>             
            </table>
          </div>
              <div v-else class="
              hidden  text-3xl text-gray-600 font-medium text-center mt-10 md:flex justify-center"> 
             <span>There is no item</span>
              </div>
          <!-- Mobile Table -->
          <!-- Mobile Table: Drivers -->
          <div v-if="activeTab === tabData[0].id" class="mt-4 md:hidden pr-4">
            <div v-if="filterdData.length>0">
            <div
              v-for="data in filterdData"
              :key="data.id"
              class="flex items-start justify-between border-b border-gray-300 py-4"
            >
              <div
                class="flex flex-col gap-3 text-sm text-gray-500 font-medium"
              >
                <span>Name</span>
                <span>Brand</span>
                <span>Model</span>
                <span>Software Capability</span>
                <span>Links</span>
              </div>
              <div
                class="flex flex-col gap-3 text-sm text-gray-800 font-medium"
              >
                <span>{{ data.name }}</span>
                <span>{{ data.brand }}</span>
                <span>{{ data.model }}</span>
                <span>{{ data.capability }}</span>
                <div class="pb-4">
                  <span
                    class="py-2 px-2 text-xs font-medium bg-gray-800 text-white"
                    >Download</span
                  >
                </div>
              </div>
            </div>
            </div>
           <div v-else class="text-3xl text-gray-600 font-medium text-center mt-10 flex justify-center">
                
             <span>There is no item</span>
              </div>
          </div>
        </section>

        <!-- SOFTWARE TAB -->
        <section v-else-if="activeTab === tabData[1].id">
          <Table2 :filter="filterInput"/>
        </section>

        <!-- DEFAULT FALLBACK -->
        <section v-else>
          <p class="text-sm text-gray-500 mt-6">
            No data available for this tab.
          </p>
        </section>
      </div>
    </ContainerComponent>
  </div>
</template>

////child data fro software tha is imported in parent
<script setup>
import {ref,computed} from 'vue'
const {filter}=defineProps({
  filter:{
    type:String
  }
})
const softwareDataTable = [
  {
    id: 1,
    name: "Ajazz Keyboard Configurator",
    brand: "Ajazz",
    model: "ConfigTool v2.1",
    capability: "Windows/Mac",
  },
  {
    id: 2,
    name: "Rayans Device Manager",
    brand: "Rayans",
    model: "RDM v4.0",
    capability: "Windows",
  },
  {
    id: 3,
    name: "StarTech Utility Suite",
    brand: "StarTech",
    model: "SU-Suite 2023",
    capability: "Windows/Linux",
  },
  {
    id: 4,
    name: "Ajazz Firmware Updater",
    brand: "Ajazz",
    model: "FWU v1.9",
    capability: "Windows/Mac/Linux",
  },
  {
    id: 5,
    name: "Rayans Monitor Calibration Tool",
    brand: "Rayans",
    model: "RMCT v3.2",
    capability: "Windows/Mac",
  },
  {
    id: 6,
    name: "StarTech Network Assistant",
    brand: "StarTech",
    model: "NetAssist v5.5",
    capability: "Windows",
  },
];

const filterdData=computed(()=>{
  return softwareDataTable.filter(Data=>Data.brand.toLowerCase().includes(filter?.toLowerCase()|| ""))
})
</script>

<template>
     <section >
          <!-- Desktop Table -->
          <div class="w-full mt-4 hidden md:block" v-if="filterdData.length>0">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-500">
                  <th class="text-sm text-left py-2 px-4 text-gray-500 font-medium">Name</th>
                  <th class="text-sm px-4 text-gray-500 font-medium">Brand</th>
                  <th class="text-sm px-4 text-gray-500 font-medium">Model</th>
                  <th class="text-sm px-4 text-gray-500 font-medium">Software Capability</th>
                  <th class="text-sm px-4 text-gray-500 font-medium">Links</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="data in filterdData"
                  :key="data.id"
                  class="border-b border-gray-500 hover:bg-gray-50 cursor-pointer"
                >
                  <td class="py-6 px-4  text-sm font-medium text-gray-800">{{ data.name }}</td>
                  <td class="text-center px-4 text-sm font-medium text-gray-800">{{ data.brand }}</td>
                  <td class="text-center px-4 text-sm font-medium text-gray-800">{{ data.model }}</td>
                  <td class="text-center px-4 text-sm font-medium text-gray-800">{{ data.capability }}</td>
                  <td class="text-center px-4 text-sm font-medium">
                    <span class="bg-gray-800 text-white py-3 px-6">Download</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
         <div v-else class="
              md:hidden  text-3xl text-gray-600 font-medium text-center mt-10 flex justify-center">
         <span>There is not Item</span> 
         </div>
          <!-- Mobile Table -->
        
          <!-- Mobile Table: Software -->
<div  class="mt-4 md:hidden pr-4" v-if="filterdData.length>0">
  <div
    v-for="data in filterdData"
    :key="data.id"
    class="flex items-start justify-between border-b border-gray-300 py-4"
  >
    <div class="flex flex-col gap-3 text-sm text-gray-500 font-medium">
      <span>Name</span>
      <span>Brand</span>
      <span>Model</span>
      <span>Software Capability</span>
      <span>Links</span>
    </div>
    <div class="flex flex-col gap-3 text-sm text-gray-800 font-medium">
      <span>{{ data.name }}</span>
      <span>{{ data.brand }}</span>
      <span>{{ data.model }}</span>
      <span>{{ data.capability }}</span>
      <div class="pb-4">
        <span class="py-2 px-2 text-xs font-medium bg-gray-800 text-white">Download</span>
      </div>
    </div>
  </div>
</div>
 <div v-else class="
              hidden  text-3xl text-gray-600 font-medium text-center mt-10 md:flex justify-center">
         <span>There is not Item</span> 
         </div>
        </section>
</template>
