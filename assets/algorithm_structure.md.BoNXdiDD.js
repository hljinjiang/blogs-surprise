import{_ as a,c as t,o as l,a4 as i}from"./chunks/framework.BEVO561w.js";const e="/assets/arrays.CUV2X2ak.png",r="/assets/linked.CMO2Fm0G.png",o="/assets/stack.DT2OaDwZ.png",s="/assets/queue.CbVnL8X-.png",p="/assets/heap.CNSMwuro.png",n="/assets/tree.CYQROP7-.png",c="/assets/hash.DLKRFoXZ.png",h="/assets/picture.CXM4W6FV.png",C=JSON.parse('{"title":"数据结构","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/structure.md","filePath":"algorithm/structure.md","lastUpdated":1709617958000}'),d={name:"algorithm/structure.md"},u=i('<h1 id="数据结构" tabindex="-1">数据结构 <a class="header-anchor" href="#数据结构" aria-label="Permalink to &quot;数据结构&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">简介</p><p>数据结构是一种在计算机中组织和存储数据的特殊方法，这样我们就可以更有效地对存储的数据执行操作</p></div><h2 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h2><p>数组是固定大小的结构，可以保存相同数据类型的项目<br> 它可以是整数数组、浮点数数组、字符串数组，甚至是数组数组（例如二维数组） 数组是索引的，这意味着随机访问是可能的</p><p><img src="'+e+'" alt="o.png"></p><p><strong>操作</strong></p><ul><li>遍历: 浏览元素并打印它们</li><li>搜索: 在数组中搜索元素，您可以按元素的值或索引搜索元素</li><li>更新: 更新给定索引处现有元素的值</li><li>插入: 在指定索引插入一个或多个元素</li><li>删除: 在指定索引删除一个或多个元素</li></ul><h2 id="链表" tabindex="-1">链表 <a class="header-anchor" href="#链表" aria-label="Permalink to &quot;链表&quot;">​</a></h2><p>链表是一种顺序结构，由一系列线性顺序的项目组成，这些项目相互链接<br> 因此，您必须按顺序访问数据，并且无法进行随机访问<br> 链表提供了动态集的简单灵活的表示形式</p><p><img src="'+r+'" alt="o.png"></p><ol><li>链表中的元素称为节点</li><li>每个节点都包含一个键和一个指向其后续节点的指针，称为 next</li><li>名为 head 的属性指向链表的第一个元素</li><li>链表的最后一个元素称为尾巴</li></ol><p><strong>种类</strong></p><ol><li>单向链表: 只能向后方向遍历项目，由 next 指向后一个节点</li><li>双向链表: 可以在向前和向后方向遍历项目。节点由一个称为 prev 的附加指针组成，指向前一个节点</li><li>循环链表: 链表，其中头部的上一个指针指向尾部，尾部的下一个指针指向头部</li></ol><p><strong>操作</strong></p><ul><li>搜索: 通过简单的线性搜索在给定链表中找到第一个键为 k 的元素，并返回指向该元素的指针</li><li>插入: 在链表中插入键。插入可以通过 3 种不同的方式完成; 插入列表开头，插入列表末尾，插入列表中间。</li><li>删除: 从给定链表中删除元素 x。不能通过一个步骤删除节点。可以通过 3 种不同的方式进行删除; 从列表开头删除，从列表末尾删除，从列表中间删除。</li></ul><h2 id="栈" tabindex="-1">栈 <a class="header-anchor" href="#栈" aria-label="Permalink to &quot;栈&quot;">​</a></h2><p>栈是一种LIFO（后进先出 - 放置在最后的元素可以首先访问）结构<br> 从栈顶放入元素的操作叫入栈，取出元素叫出栈</p><p><img src="'+o+'" alt="o.png"></p><h2 id="队列" tabindex="-1">队列 <a class="header-anchor" href="#队列" aria-label="Permalink to &quot;队列&quot;">​</a></h2><p>队列是一种FIFO（先进先出 - 首先放置的元素可以首先访问）结构<br> 它类似于现实人们在队列中等待，队列可以在一端添加元素，在另一端取出元素</p><p><img src="'+s+'" alt="o.png"></p><h2 id="堆" tabindex="-1">堆 <a class="header-anchor" href="#堆" aria-label="Permalink to &quot;堆&quot;">​</a></h2><p>堆是二叉树的一种特例，属于<code>完全二叉树</code>，其中父节点与其值的子节点进行比较，并相应地排列<br> 不必将值一个个地插入堆中，通过交换形成堆</p><p><img src="'+p+'" alt="o.png"></p><p><strong>种类</strong></p><ul><li>最小堆: 父级的键小于或等于其子级的键。这称为<code>最小堆</code>属性。根将包含堆的最小值。</li><li>最大堆: 父项的键大于或等于其子项的键。这称为<code>最大堆</code>属性。根将包含堆的最大值。</li></ul><p><strong>操作</strong></p><ul><li>从顶部开始，从左往右排放，先顶部放置一个节点，每个节点最多放两个子元素，子元素和父节点比较大小并交换，当前行若放满则换行继续按照此方式依次排放</li><li>从底部开始，从右往左取出，先取出顶部一个节点，将最底部元素放到顶部位置，该节点和子元素比较大小并交换，交换后取出元素并继续按照此方式依次放入顶部</li></ul><h2 id="树" tabindex="-1">树 <a class="header-anchor" href="#树" aria-label="Permalink to &quot;树&quot;">​</a></h2><p>树是一种分层结构，其中数据按层次结构组织并链接在一起</p><p><img src="'+n+'" alt="o.png"></p><p><strong>种类</strong></p><ul><li>二叉树（满二叉树、完全二叉树）</li><li>二叉查找树（二叉搜索树、二叉排序树）</li><li>平衡二叉树（红黑树）</li><li>B树（B+树、B*树）</li><li>Trie树</li></ul><h2 id="哈希表" tabindex="-1">哈希表 <a class="header-anchor" href="#哈希表" aria-label="Permalink to &quot;哈希表&quot;">​</a></h2><p>根据关键码值(Key value)而直接进行访问的数据结构<br> 解决直接寻址问题，加快查找的速度<br> 插入和查找的时间复杂度都是为O(1)</p><p><img src="'+c+'" alt="o.png"></p><h2 id="图" tabindex="-1">图 <a class="header-anchor" href="#图" aria-label="Permalink to &quot;图&quot;">​</a></h2><p>图是由一组<code>有限的顶点或节点</code>以及<code>一组连接这些顶点的边</code>组成<br> 通常表示为：G(V, E)，其中，G表示一个图，V是图G中顶点的集合，E是图G中边的集合</p><p><img src="'+h+'" alt="o.png"></p><p><strong>种类</strong></p><ul><li>无向图: 图上的边没有方向</li><li>有向图: 图上的边有方向</li></ul>',41),_=[u];function g(m,b,q,f,k,x){return l(),t("div",null,_)}const T=a(d,[["render",g]]);export{C as __pageData,T as default};
