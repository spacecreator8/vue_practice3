//eventBus.$emit | need-create-card - сигнал от кнопки создания первому стобцу на отображение новой формы для создания карты





let eventBus = new Vue();

Vue.component('card', {
    props:{
        column_id:{
            type: String,
            required: true,
        }
    },
    template:
        `
        <p>Hello</p>
        `
    ,
    data(){
        return{
            card:{
                date:{

                }
            }
        }
    },
    mounted(){
        eventBus.$on('need-create-card', ()=>{
            if(this.column_id == 'first'){
                console.log(1);
                let date = new Date();
                console.log(date);
            }
        })
    }
})


Vue.component('column', {
    props: {
        column_id: {
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true,
        }
    },
    data(){
        return {
            list: [],
        }
    },
    template: `
    <div class="column-space">
        <p>{{ name }}</p>
        <card :column_id="column_id"></card>
    </div>
    `,
    methods:{

    },
    mounted(){

    }
})



let app = new Vue({
    el: '#app',
    methods:{
        create_new_card(){
            eventBus.$emit('need-create-card');  
        }
    }
})