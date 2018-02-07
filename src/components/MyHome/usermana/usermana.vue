<template>
	<div class="usermana">
    <el-container>
		    <el-aside width="500px">
		    	<p>组织机构</p>
                <el-tree
                    :data="data4"
                    :props="defaultProps"
                    node-key="id"
                    default-expand-all
                    :expand-on-click-node="false"
                    :render-content="renderContent"
                    @node-click="showdept">
                </el-tree>
		    </el-aside>
		    <el-container>
		        <dptdetail></dptdetail>
		    </el-container>
		</el-container>
	</div>
</template>

<script>

    import dptdetail from './dptdetail/dptdetail.vue';
    import { mapGetters,mapMutations } from 'vuex'
    
    let id = 1000;
	export default{
          data (){
          	return{
                data4: [{
                  id: 1,
                  label: '一级 1',
                  children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                      id: 9,
                      label: '三级 1-1-1'
                    }, {
                      id: 10,
                      label: '三级 1-1-2'
                    }]
                  }]
                }, {
                  id: 2,
                  label: '一级 2',
                  children: [{
                    id: 5,
                    label: '二级 2-1'
                  }, {
                    id: 6,
                    label: '二级 2-2'
                  }]
                }, {
                  id: 3,
                  label: '一级 3',
                  children: [{
                    id: 7,
                    label: '二级 3-1'
                  }, {
                    id: 8,
                    label: '二级 3-2'
                  }]
                }],
                defaultProps: {
                  children: 'children',
                  label: 'label'
                }
          	}
          },
          components: {
		    dptdetail,
		  },
		  computed: {
	       	...mapGetters([
	   		    'cur_depart'
	   		]),
	      },
          methods: {
          	...mapMutations([
          		  'RECORD_DEPT_DETAIL',
          		]),
            //保存当前部门节点详情
            showdept (data){
            	this.RECORD_DEPT_DETAIL(data);
            },
             append(data) {
                const newChild = { id: id++, label: 'testtest', children: [] };
                if (!data.children) {
                  this.$set(data, 'children', []);
                }
                data.children.push(newChild);
              },

              remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
              },
              modify(data){
                this.$set(data,'label','修改名字')
              },
              renderContent(h, { node, data, store }) {
                return (
                  <div style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
                    <span>
                      <span>{node.label}</span>
                    </span>
                    <span>
                      <el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>增加子节点</el-button>
                      <el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
                      <el-button style="font-size: 12px;" type="text" on-click={ () => this.modify(data) }>修改名字</el-button>
                      <el-button style="font-size: 12px;" type="text" on-click={ () => this.upmove(node, data) }>上移</el-button>
                      <el-button style="font-size: 12px;" type="text" on-click={ () => this.downmove(data) }>下移</el-button>
                    </span>
                  </div>);
              },
        }
	}
</script>

<style scoped lang="scss">
.usermana{
	height: 100%;
}
</style>