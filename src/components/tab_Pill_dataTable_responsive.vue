<script setup>
import ContainerComponent from "./ContainerComponent.vue";
import Heading from "./Heading.vue";
import { ref } from "vue";
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

</script>
<template>
  <div>
    <ContainerComponent>
      <div class="mt-16">
        <Heading>
          <template #heading>Data Tables</template>
          <template #bodyText
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            placeat sit laborum suscipit nobis vero, ex quos minus qui! Quasi
            veritatis consectetur ex dolor, quisquam id explicabo expedita
            commodi ea.
          </template>
        </Heading>
        <section class="mt-12">
          <div class="flex gap-2 flex-wrap">
            <div
              v-for="tab in tabData"
              :key="tab.id"
              @click="activeTab=tab.id"
              class="px-3 py-3  cursor-pointer"
              :class="activeTab===tab.id?'bg-gray-800 text-white':'bg-gray-100 text-gray-500'"
            >
              {{ tab.tabItem }}
            </div>
          </div>

        </section>
        <!--datatable-desktop-->
        <section v-if="activeTab===tabData[0].id">
          <div class="w-full mt-4 hidden md:block">
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

              <!--tableBody-->
              <tbody>
                <template v-for="data in dataTable" :key="data.id">
                  <tr
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
                        >download</span
                      >
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <!--mobileTable-->
          <section class="mt-4 md:hidden pr-4">
            <div
              v-for="data in dataTable"
              :key="data.id"
              class="flex flex-1 items-start justify-between border-b border-gray-300 py-4"
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
          </section>
          <!-- mobileTable -->
        </section>
        <section v-else-if="activeTab===tabData[1].id">
        <p >There is no  item</p>
        </section>
        <section v-else>
        <p >Fuck You!!!</p>
        </section>
      </div>
    </ContainerComponent>
  </div>
</template>
