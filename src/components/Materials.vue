<template>
    <div class="materials">
        <div class="materials__classes">
            <ul class="materials__classes-list">
                <li v-for="(grade, index) in grades" :key="index" @click="changeGrade(grade)" class="materials__classes-item" :class="{'materials__type-item_is_active': currentGradeType === grade.typeGrade }">
                    <span  class="materials__classes-item_grade">{{grade.description}}</span>
                </li>
            </ul>
        </div>
        <div class="materials__type">
            <ul class="materials__type-list">
                <li v-for="material in materialsType" :key="material.type" @click="changeMaterialType(material)" class="materials__type-item" :class="{'materials__type-item_is_active': currentMaterialType === material.typeMaterial }">
                    <span   class="materials__type-item_material">{{material.description}}</span>
                </li>
            </ul>
        </div>
        <div class="materials__links">
            <div class="divTable" v-if="currentList">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableHead">Работа</div>
                        <div class="divTableHead">Ссылка</div>
                        <div class="divTableHead">Описание</div>
                    </div>
                    <div class="divTableRow" v-for="(material, index) in currentList.resources" :key="index">
                        <div class="divTableCell">{{index + 1}}. {{material.name}}</div>
                        <div class="divTableCell"><a class="materials__links-item__link" :href='material.link'>{{material.link}}</a></div>
                        <div class="divTableCell">{{material.description}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { materials } from '@/helpers/helper'

export default {
  name: 'Materials',
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
          currentList: null
      }
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
        }
    }
}
</script>

<style lang="sass" src="@/media/sass/components/materials.sass"></style>