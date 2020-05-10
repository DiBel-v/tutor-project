<template>
  <div class="materials">
    <div class="materials__classes">
        <ul class="materials__classes-list">
            <span v-if="this.isMobile">Класс</span>
            <li
                v-for="(grade, index) in grades"
                :key="index"
                @click="changeGrade(grade)"
                class="materials__classes-item"
                :class="{'materials__type-item_is_active': currentGradeType === grade.typeGrade }"
            >
                <span class="materials__classes-item_grade">{{isMobile ? grade.description.split(' ')[0] : grade.description}}</span>
            </li>
        </ul>
    </div>
    <div class="materials__type">
      <ul class="materials__type-list">
        <li
          v-for="material in materialsType"
          :key="material.type"
          @click="changeMaterialType(material)"
          class="materials__type-item"
          :class="{'materials__type-item_is_active': currentMaterialType === material.typeMaterial }"
        >
          <span class="materials__type-item_material">{{material.description}}</span>
        </li>
      </ul>
    </div>
    <div class="materials__links">
      <div class="divTable" v-if="currentList">
        <div class="divTableBody">
          <div class="divTableRow">
            <div class="divTableHead">Работа</div>
            <div v-if="!isMobile" class="divTableHead">Ссылка</div>
            <div class="divTableHead">Описание</div>
          </div>
          <div class="divTableRow" v-for="(material, index) in currentList.resources" :key="index">
            <div class="divTableCell materials__links-name">{{material.name}}</div>
            <div v-if="!isMobile" class="divTableCell">
              <a class="materials__links-item__link" :href="material.link">{{material.link}}</a>
            </div>
            <div class="divTableCell">
                <button class="materials__links-item__but" @click="openModal(material)" v-if="isMobile">Читать</button>
                <span v-if="!isMobile">{{material.description}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalDescription v-if="isMaterialModalOpened" :material="readCurrentMaterial"></ModalDescription>
  </div>
</template>

<script>
import { materials } from '@/helpers/helper';
import { mapGetters } from 'vuex';
import ModalDescription from './ModalDescription';

export default {
name: 'Materials',
components: {
    ModalDescription
},
data() {
    return {
            grades: [
            {
                typeGrade: 0,
                description: '5 класс'
            },
            {
                typeGrade: 1,
                description: '6 класс'
            },
            {
                typeGrade: 2,
                description: '7 класс'
            },
            {
                typeGrade: 3,
                description: '8 класс'
            },
            {
                typeGrade: 4,
                description: '9 класс'
            },
            {
                typeGrade: 5,
                description: '10 класс'
            },
            {
                typeGrade: 6,
                description: '11 класс'
            }
        ],
            materialsType: [
                {
                    typeMaterial: 0,
                    description: 'Контрольные работы'
                },
                {
                    typeMaterial: 1,
                    description: 'Самостоятельные работа'
                },
                {
                    typeMaterial: 2,
                    description: 'Учебные материалы'
                }
            ],
            currentMaterialType: 0,
            currentGradeType: 0,
            currentList: null,
            readCurrentMaterial: null
        }
    },
    computed:{
        ...mapGetters([
            'isMobile',
            'isMaterialModalOpened'
        ])
    },
    watch: {
        currentGradeType() {
            this.changeMaterialList();
        },
        currentMaterialType() {
            this.changeMaterialList();
        }
    },
    mounted() {
        const scroller = document.querySelector('.materials__links');
        scroller.style.height = `${window.innerHeight - 250}px`;
        window.addEventListener('resize', () => {
            scroller.style.height = `${window.innerHeight - 250}px`;
        })
        this.currentList = materials.find((item) => {
            return item.materialType === this.currentMaterialType && item.gradeType === this.currentGradeType;
        });
    },
    methods: {
        changeMaterialList() {
        this.currentList = materials.find((item) => {
            return item.materialType === this.currentMaterialType && item.gradeType === this.currentGradeType;
        });
        },
        changeGrade(grade) {
            this.currentGradeType = grade.typeGrade;
        },
        changeMaterialType(material) {
            this.currentMaterialType = material.typeMaterial;
        },
        openModal(material) {
            this.readCurrentMaterial = material;
            this.$store.commit('SET_IS_MATERIAL_MODAL_OPENED', true);
        }
    }
}
</script>

<style lang="sass" src="@/media/sass/components/materials.sass"></style>