/**
 * 游戏对象接口集合
 * @author suo
 */
module catchDoll {

	/**
	 * 类似于egret.IEventDispatcher 和 egret.EventDispatcher 
	 * 变相实现多继承
	 */
	export interface IGameObject extends GameObject {
	}
	export interface IGameObjectCollider extends GameObjectCollider {
	}

	/**
 	 * 游戏对象可变属性接口
 	 * @author suo
 	 */
	export interface IGameObjectVars {
		/*出生坐标X*/
		bornX: number,
		/*出生坐标Y*/
		bornY: number,
		/*旋转角度*/
		rotation?: number,

	}

	/**
	 * 带碰撞器物体的接口
	 */
	export interface IColliderConfigData extends IConfigData {
		/*碰撞器配置数据*/
		colliderAry: ICollider[]
	}

	/**
	 * 操作类型
	 */
	export interface IOperation {
		/*类型*/
		type: OPERATION_TYPE,
	}

	/**
	 * 子弹接口
	 */
	export interface IBulletVars extends IGameObjectVars {
	}

	/**
	 * 怪物数据接口
	 */
	export interface IMonsterVars extends IGameObjectVars {
		/*操作类型*/
		operation?: IOperation[],
	}

	/**
	 * 游戏对象配置接口
	 */
	export interface IGameObjectConfig {
		/*资源*/
		configAsset: IConfigAsset;
		/*配置数据*/
		configData: IConfigData;
	}

	/**
	 * 初始化一次 不可更改数据 example：碰撞器（通常与美术资源绑定）
	 */
	export interface IConfigData {
	}


	/**
	 * 怪物初始化一次数据
	 */
	export interface IMonsterConfigData extends IColliderConfigData {
		/*生命*/
		life: number,
		/*速度*/
		speed: number,
		/*绝对锚点X*/
		anchorOffsetX: number,
		/*绝对锚点Y*/
		anchorOffsetY: number,
	}

	/**
	 * 子弹初始化一次数据
	 */
	export interface IBulletConfig extends IColliderConfigData {
		/*等级*/
		level: number
		/*速度*/
		speed: number
	}

	/**
	 * 资源加载接口
	 */
	export interface IConfigAsset {
		/*资源key*/
		readonly imageAry?: IImagePlayer[],
		/*如果是MovieClip 填写Action*/
		readonly movieClipAry?: IMoviePlayer[],
		/*龙骨名称*/
		readonly dragonBonesName?: string;
	}

	/**
	 * 图片接口
	 */
	export interface IImagePlayer {

		/*键名*/
		readonly keyName: string,
		/*资源名*/
		readonly sourceName: string,
		/*X偏移*/
		readonly offsetX?: number,
		/*Y偏移*/
		readonly offsetY?: number,
		/*X缩放*/
		readonly scaleX?: number,
		/*y缩放*/
		readonly scaleY?: number,
	}

	/**
	 * 影片剪辑接口
	 */
	export interface IMoviePlayer {
		/*键名*/
		readonly keyName: string,
		/*组名字组*/
		readonly groupName: string,
		/*动作名字组*/
		readonly actionName: string,
		/*X偏移*/
		readonly offsetX?: number,
		/*Y偏移*/
		readonly offsetY?: number,
		/*帧率*/
		readonly frameRate?: number,
		/*X缩放*/
		readonly scaleX?: number,
		/*y缩放*/
		readonly scaleY?: number,
	}

	/**
	 * 碰撞器接口
	 */
	export interface ICollider {
		/*x坐标*/
		posX: number,
		/*y坐标*/
		posY: number,
		/*半径*/
		radius?: number,
	}

}
