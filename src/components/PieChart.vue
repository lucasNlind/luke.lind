<script>

    import { defineComponent } from 'vue';
    import { Pie } from 'vue3-chart-v2';

    export default defineComponent({
        name: 'PieChart',
        extends: Pie,
        props: {
            rotation: { type: Number },
            chartColor: { type: String },
            percentageWhite: { type: Number },
            percentageColor: { type: Number },
        },
        data() {
            return {
                state: {
                    chartData: {
                        datasets: [
                            {
                                data: [this.percentageWhite, this.percentageColor],
                                backgroundColor: ['white', this.chartColor],
                                hoverBackgroundColor: ['white', this.chartColor],
                                borderColor: ['white', this.chartColor],
                                hoverBorderColor: ['white',this.chartColor]
                            },
                        ],
                    },
                    options: {
                        rotation: this.rotation,
                        animation: {
                            duration: 1500,
                        },
                        responsive: true,
                        tooltips: {
                            enabled: false
                        },
                    }
                }
            }
        },
        mounted() {
            this.renderChart(this.state.chartData, this.state.options);
        }
    })

</script>