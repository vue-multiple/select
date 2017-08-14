<template>
    <div id="app">
        <demonstration
                tag="h2"
                title="Select 选择器"
                description="当选项过多时，使用下拉菜单展示并选择内容。"
                :show-content="false">
        </demonstration>
        <demonstration
                title="基础用法"
                anchor="demo-code-title"
                :highlight="sourcecode1">
            <template slot="description">
            </template>
            <template slot="source">
                <div class="source">
                    <vm-select v-model="value1"
                               placeholder="请选择">
                        <vm-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </vm-option>
                    </vm-select>
                </div>
            </template>
            <template slot="explanation">
                v-model的值为当前被选中的<br>
                vm-option的 value 属性值
            </template>
        </demonstration>
        <demonstration
                title="有禁用选项"
                anchor="demo-code-title"
                :highlight="sourcecode2">
            <template slot="description">
            </template>
            <template slot="source">
                <div class="source">
                    <vm-select v-model="value2" placeholder="请选择">
                        <vm-option
                                v-for="item in options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                        </vm-option>
                    </vm-select>
                </div>
            </template>
            <template slot="explanation">
                在vm-option中，设定disabled值为 true，即可禁用该选项
            </template>
        </demonstration>
        <demonstration
                title="禁用状态"
                anchor="demo-code-title"
                :highlight="sourcecode3">
            <template slot="description">
                选择器不可用状态
            </template>
            <template slot="source">
                <div class="source">
                    <vm-select v-model="value3" disabled placeholder="请选择">
                        <vm-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                        </vm-option>
                    </vm-select>
                </div>
            </template>
            <template slot="explanation">
                为vm-select设置disabled属性，则整个选择器不可用
            </template>
        </demonstration>
        <demonstration
                title="可清空单选"
                anchor="demo-code-title"
                :highlight="sourcecode4">
            <template slot="description">
                包含清空按钮，可将选择器清空为初始状态
            </template>
            <template slot="source">
                <div class="source">
                    <vm-select v-model="value4" clearable placeholder="请选择">
                        <vm-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </vm-option>
                    </vm-select>
                </div>
            </template>
            <template slot="explanation">
                为vm-select设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。
            </template>
        </demonstration>
        <demonstration
                title="基础多选"
                anchor="demo-code-title"
                :highlight="sourcecode5">
            <template slot="description">
                适用性较广的基础多选，用 Tag 展示已选项
            </template>
            <template slot="source">
                <div class="source">
                    <vm-select v-model="value5" multiple placeholder="请选择">
                        <vm-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </vm-option>
                    </vm-select>
                </div>
            </template>
            <template slot="explanation">
                为vm-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组
            </template>
        </demonstration>
        <demonstration
                title="自定义模板"
                anchor="demo-code-title"
                :highlight="sourcecode6">
            <template slot="description">
                可以自定义备选项
            </template>
            <template slot="source">
                <div class="source">
                    <vm-select v-model="value6" placeholder="请选择">
                        <vm-option
                                v-for="item in cities"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            <span style="float: left">{{ item.label }}</span>
                            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                        </vm-option>
                    </vm-select>
                </div>
            </template>
            <template slot="explanation">
                将自定义的 HTML 模板插入vm-option的 slot 中即可。
            </template>
        </demonstration>
        <demonstration
                title="分组"
                anchor="demo-code-title"
                :highlight="sourcecode7">
            <template slot="description">
                备选项进行分组展示
            </template>
            <template slot="source">
                <div class="source">
                    <vm-select v-model="value7" placeholder="请选择">
                        <vm-option-group
                                v-for="group in options3"
                                :key="group.label"
                                :label="group.label">
                            <vm-option
                                    v-for="item in group.options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </vm-option>
                        </vm-option-group>
                    </vm-select>
                </div>
            </template>
            <template slot="explanation">
                使用vm-option-group对备选项进行分组，它的label属性为分组名
            </template>
        </demonstration>
        <demonstration
                title="可搜索"
                anchor="demo-code-title"
                :highlight="sourcecode8">
            <template slot="description">
                可以利用搜索功能快速查找选项
            </template>
            <template slot="source">
                <div class="source">
                    <vm-select v-model="value8" filterable placeholder="请选择">
                        <vm-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </vm-option>
                    </vm-select>
                </div>
            </template>
            <template slot="explanation">
                为vm-select添加filterable属性即可启用搜索功能。默认情况下，Select 会找出所有label属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个filter-method来实现。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。
            </template>
        </demonstration>
        <demonstration
                title="远程搜索"
                anchor="demo-code-title"
                :highlight="sourcecode9">
            <template slot="description">
                从服务器搜索数据，输入关键字进行查找
            </template>
            <template slot="source">
                <div class="source">
                    <vm-select
                            v-model="value9"
                            multiple
                            filterable
                            remote
                            placeholder="请输入关键词"
                            :remote-method="remoteMethod"
                            :loading="loading">
                        <vm-option
                                v-for="item in options4"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </vm-option>
                    </vm-select>
                </div>
            </template>
            <template slot="explanation">
                为了启用远程搜索，需要将filterable和remote设置为true，同时传入一个remote-method。remote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果vm-option是通过v-for指令渲染出来的，此时需要为vm-option添加key属性，且其值需具有唯一性，比如此例中的item.value。
            </template>
        </demonstration>
        <demonstration
                title="创建条目"
                anchor="demo-code-title"
                :highlight="sourcecode10">
            <template slot="description">
                可以创建并选中选项中不存在的条目
            </template>
            <template slot="source">
                <div class="source">
                    <vm-select
                            v-model="value10"
                            multiple
                            filterable
                            allow-create
                            placeholder="请选择文章标签">
                        <vm-option
                                v-for="item in options5"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </vm-option>
                    </vm-select>
                </div>
            </template>
            <template slot="explanation">
                使用 allow-create 属性即可通过在输入框中输入文字来创建新的条目。注意此时 filterable 必须为真。
            </template>
        </demonstration>
        <div class="input-demo__item">
            <h3 id="attributes">
                <a href="./#attributes" aria-hidden="true" class="header-anchor">¶</a>
                Select Attributes
            </h3>
            <table class="table">
                <thead>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
                </thead>
                <tbody>
                <tr>
                    <td>multiple</i></td>
                    <td>是否多选</td>
                    <td>boolean</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disabled</i></td>
                    <td>是否禁用</td>
                    <td>boolean</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>value-key</i></td>
                    <td>作为 value 唯一标识的键名，绑定值为对象类型时必填</td>
                    <td>string</td>
                    <td>—</td>
                    <td>value</td>
                </tr>
                <tr>
                    <td>inputheight</i></td>
                    <td>当为多选时，可通过inputheight 修改 Select input框的高度</td>
                    <td>number</td>
                    <td>—</td>
                    <td>36</td>
                </tr>
                <tr>
                    <td>inputclass</i></td>
                    <td>Select input框的类名，当为多选时，无法改变高度，高度只能通过inputheight属性设置</td>
                    <td>string</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>clearable</i></td>
                    <td>单选时是否可以清空选项</td>
                    <td>boolean</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>multiple-limit</i></td>
                    <td>多选时用户最多可以选择的项目数，为 0 则不限制</td>
                    <td>number</td>
                    <td>—</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>name</i></td>
                    <td>select input 的 name 属性</td>
                    <td>string</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>placeholder</i></td>
                    <td>占位符</td>
                    <td>string</td>
                    <td>—</td>
                    <td>请选择</td>
                </tr>
                <tr>
                    <td>filterable</i></td>
                    <td>是否可搜索</td>
                    <td>boolean</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>allow-create</i></td>
                    <td>是否允许用户创建新条目，需配合 filterable 使用</td>
                    <td>boolean</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>filter-method</i></td>
                    <td>自定义过滤方法</td>
                    <td>function</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>remote</i></td>
                    <td>是否为远程搜索</td>
                    <td>boolean</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>remote-method</i></td>
                    <td>远程搜索方法</td>
                    <td>function</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>loading</i></td>
                    <td>是否正在从远程获取数据</td>
                    <td>boolean</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>loading-text</i></td>
                    <td>远程加载时显示的文字</td>
                    <td>string</td>
                    <td>—</td>
                    <td>加载中</td>
                </tr>
                <tr>
                    <td>no-match-text</i></td>
                    <td>搜索条件无匹配时显示的文字</td>
                    <td>string</td>
                    <td>—</td>
                    <td>无匹配数据</td>
                </tr>
                <tr>
                    <td>no-data-text</i></td>
                    <td>选项为空时显示的文字</td>
                    <td>string</td>
                    <td>—</td>
                    <td>无数据</td>
                </tr>
                <tr>
                    <td>popper-class</i></td>
                    <td>Select 下拉框的类名</td>
                    <td>string</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>default-first-option</i></td>
                    <td>在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用</td>
                    <td>boolean</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="input-demo__item">
            <h3 id="event">
                <a href="./#event" aria-hidden="true" class="header-anchor">¶</a>
                Select Events
            </h3>
            <table class="table">
                <thead>
                <th>事件名称</th>
                <th>说明</th>
                <th>回调参数</th>
                </thead>
                <tbody>
                <tr>
                    <td>change</td>
                    <td>选中值发生变化时触发</td>
                    <td>目前的选中值</td>
                </tr>
                <tr>
                    <td>visible-change</td>
                    <td>下拉框出现/隐藏时触发</td>
                    <td>出现则为 true，隐藏则为 false</td>
                </tr>
                <tr>
                    <td>remove-tag</td>
                    <td>多选模式下移除tag时触发</td>
                    <td>移除的tag值</td>
                </tr>
                <tr>
                    <td>clear</td>
                    <td>可清空的单选模式下用户点击清空按钮时触发</td>
                    <td>—</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="input-demo__item">
            <h3 id="optionGroupAttributes">
                <a href="./#optionGroupAttributes" aria-hidden="true" class="header-anchor">¶</a>
                Option Group Attributes
            </h3>
            <table class="table">
                <thead>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
                </thead>
                <tbody>
                <tr>
                    <td>label</i></td>
                    <td>分组的组名</td>
                    <td>string</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>disabled</i></td>
                    <td>是否将该分组下所有选项置为禁用</td>
                    <td>boolean</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="input-demo__item">
            <h3 id="optionAttributes">
                <a href="./#optionAttributes" aria-hidden="true" class="header-anchor">¶</a>
                Option Attributes
            </h3>
            <table class="table">
                <thead>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
                </thead>
                <tbody>
                <tr>
                    <td>value</i></td>
                    <td>选项的值</td>
                    <td>string/number/object</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>label</i></td>
                    <td>选项的标签，若不设置则默认与 value 相同</td>
                    <td>string/number</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>disabled</i></td>
                    <td>是否禁用该选项</td>
                    <td>boolean</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script type="es6">
    import {sourcecode1, sourcecode2, sourcecode3, sourcecode4, sourcecode5, sourcecode6, sourcecode7, sourcecode8, sourcecode9, sourcecode10} from './template'
    export default {
        data() {
            return {
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ],
                options2: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶',
                        disabled: true
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ],
                options3: [
                    {
                        label: '热门城市',
                        options: [{
                            value: 'Shanghai',
                            label: '上海'
                        }, {
                            value: 'Beijing',
                            label: '北京'
                        }]
                    }, {
                        label: '城市名',
                        options: [{
                            value: 'Chengdu',
                            label: '成都'
                        }, {
                            value: 'Shenzhen',
                            label: '深圳'
                        }, {
                            value: 'Guangzhou',
                            label: '广州'
                        }, {
                            value: 'Dalian',
                            label: '大连'
                        }]
                    }
                ],
                options4: [],
                options5: [
                    {
                        value: 'HTML',
                        label: 'HTML'
                    }, {
                        value: 'CSS',
                        label: 'CSS'
                    }, {
                        value: 'JavaScript',
                        label: 'JavaScript'
                    }
                ],
                cities: [
                    {
                        value: 'Beijing',
                        label: '北京'
                    }, {
                        value: 'Shanghai',
                        label: '上海'
                    }, {
                        value: 'Nanjing',
                        label: '南京'
                    }, {
                        value: 'Chengdu',
                        label: '成都'
                    }, {
                        value: 'Shenzhen',
                        label: '深圳'
                    }, {
                        value: 'Guangzhou',
                        label: '广州'
                    }
                ],
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                value8: '',
                value9: '',
                value10: '',
                list: [],
                loading: false,
                states: ["Alabama", "Alaska", "Arizona",
                    "Arkansas", "California", "Colorado",
                    "Connecticut", "Delaware", "Florida",
                    "Georgia", "Hawaii", "Idaho", "Illinois",
                    "Indiana", "Iowa", "Kansas", "Kentucky",
                    "Louisiana", "Maine", "Maryland",
                    "Massachusetts", "Michigan", "Minnesota",
                    "Mississippi", "Missouri", "Montana",
                    "Nebraska", "Nevada", "New Hampshire",
                    "New Jersey", "New Mexico", "New York",
                    "North Carolina", "North Dakota", "Ohio",
                    "Oklahoma", "Oregon", "Pennsylvania",
                    "Rhode Island", "South Carolina",
                    "South Dakota", "Tennessee", "Texas",
                    "Utah", "Vermont", "Virginia",
                    "Washington", "West Virginia", "Wisconsin",
                    "Wyoming"],
                sourcecode1,
                sourcecode2,
                sourcecode3,
                sourcecode4,
                sourcecode5,
                sourcecode6,
                sourcecode7,
                sourcecode8,
                sourcecode9,
                sourcecode10
            };
        },
        mounted() {
            this.list = this.states.map(item => {
                return {value: item, label: item};
            });
        },
        methods: {
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputValue = '';
            },
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options4 = this.list.filter(item => {
                            return item.label.toLowerCase()
                                    .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.options4 = [];
                }
            }
        }
    }
</script>

<style lang="less" type="text/less" rel="stylesheet/less">

    #app {
        margin: 60px auto;
    }

    .newTagInput {
        width: 72px;
        height: 24px;
        font-size: 12px;
    }

    .newTagInput::placeholder {
        color: #666;
    }

    .tagclass + {
        margin-right: 10px;
    }

    .input-demo__item {
        width: 1000px;
        margin: 0 auto;
        h2, h3 {
            font-weight: 400;
            color: #1f2f3d;
        }

        h2 {
            font-size: 28px;
            margin: 0
        }

        h3 {
            font-size: 22px;
            margin: 45px 0 15px;
        }

        h3, h2 {

            &
            :hover {

                a {
                    opacity: .4;
                }

            }
            a {
                float: left;
                margin-left: -20px;
                opacity: 0;
                cursor: pointer;
                color: #4078c0;
                text-decoration: none;

                &
                :hover {
                    opacity: .4;
                }

            }
        }
        p {
            font-size: 14px;
            color: #5e6d82;
            line-height: 1.5em;

            a {
                color: #2d8cf0;
                background: 0 0;
                text-decoration: none;
                outline: 0;
                cursor: pointer;
                transition: color .2s ease;

                &
                :hover {
                    color: #57a3f3;
                }

            }
        }
        .new {
            font-style: normal;
            color: #FF4949;

            code {
                background-color: #FF4949 !important;
                color: #fff !important;
            }

        }
        .table {
            border-collapse: collapse;
            width: 100%;
            background-color: #fff;
            color: #5e6d82;
            font-size: 14px;
            margin-bottom: 45px;
            line-height: 1.5em;

            th {
                text-align: left;
                border-top: 1px solid #eaeefb;
                background-color: #eff2f7;
                white-space: nowrap;
            }

            th, td {
                border-bottom: 1px solid #eaeefb;
                padding: 10px;
                max-width: 250px;
            }

        }
    }
</style>