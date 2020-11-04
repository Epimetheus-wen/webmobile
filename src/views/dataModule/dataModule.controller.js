import DataModuleHeader from "../../components/header/dataModuleHeader.vue";
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    data: function() {
        return {
            headertitle: "数据监控",
            sublevel: true,
        };
    },
    components: {
        DataModuleHeader
    },
    computed: {
        ...mapState({
            dataModule: state => state.dataModule.dataModule,
            dataModulefirst: state => state.dataModule.dataModulefirst,
            informNote: state => state.dataModule.informNote,
            vipNote: state => state.dataModule.vipNote,
            codeNote: state => state.dataModule.codeNote,
            voice: state => state.dataModule.voice,
            idData: state => state.dataModule.idData,
            phoneData: state => state.dataModule.phoneData,
        })
    },
    watch: {
        $route(to) {
            if (to.path != "/dataModule") {
                this.sublevel = false
            } else {
                this.sublevel = true
            }
        }

    },
    mounted() {

        if (this.dataModulefirst) {
            this.getDataModule()
            this.getRecord({ src: 'getSmsToday', id: 2 })
            this.getRecord({ src: 'getSmsToday', id: 3 })
            this.getRecord({ src: 'getSmsToday', id: 4 })
            this.getRecord({ src: 'getVoiceToday' })
            this.getRecord({ src: 'getPhoneVerifyToday' })
            this.getRecord({ src: 'getIdentityVerifyToday' })
            this.updatedataModulefirst()
        }

        let path = this.$route.path
        if (path != "/dataModule") {
            this.sublevel = false
        } else {
            this.sublevel = true
        }
    },
    methods: {
        ...mapMutations(['updateDataModule', 'updatedataModulefirst', 'updateRecord']),
        ...mapActions(['getDataModule', 'getRecord']),
        toproductData(src) {
            if (src <= 3) {
                if (src == 1 && this.informNote.is_activate == 1) {
                    this.$router.push({
                        path: '/productData/messageData',
                        query: {
                            id: src
                        }
                    });
                }
                if (src == 2 && this.vipNote.is_activate == 1) {
                    this.$router.push({
                        path: '/productData/messageData',
                        query: {
                            id: src
                        }
                    });
                }
                if (src == 3 && this.codeNote.is_activate == 1) {
                    this.$router.push({
                        path: '/productData/messageData',
                        query: {
                            id: src
                        }
                    });
                }

            }
            if (src == 4) {
                if (this.voice.is_activate == 1) {
                    this.$router.push({
                        path: '/productData/voiceData',
                        query: {
                            id: src
                        }
                    });
                }

            }
            if (src == 5) {
                if (this.idData.is_activate == 1) {
                    this.$router.push({
                        path: '/productData/idData',
                        query: {
                            id: src
                        }
                    });
                }
            }
            if (src == 6) {
                if (this.phoneData.is_activate == 1) {
                    this.$router.push({
                        path: '/productData/phoneData',
                        query: {
                            id: src
                        }
                    });
                }
            }

        },
    }
};