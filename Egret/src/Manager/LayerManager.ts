/**
 * 层级管理
 * @author suo
 */
module catchDoll {
	export class LayerManager {
		/**
		 * 单例
		 */
		private static _instance: LayerManager;
		/**
		 * 层级字典
		 */
		private _layerMap: SimpleMap<egret.DisplayObjectContainer> = new SimpleMap<egret.DisplayObjectContainer>();
		/**
		 * 跟节点
		 */
		private _root: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

		constructor() {
			egret.MainContext.instance.stage.addChild(this._root);
			for (let i: number = LAYER.BG; i < LAYER.EFFECT + 1; i++) {
				let layer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
				// layer.touchChildren = false;
				this._layerMap.set(i, layer);
				this._root.addChild(layer);
			}

		}

		/**
		 * 获得单例
		 */
		public static get instance(): LayerManager {
			if (this._instance == null) {
				this._instance = new LayerManager();
			}
			return this._instance;
		}

		/**
		 * 添加到对应层级
		 */
		public addToLayer(source: egret.DisplayObject, layerType: LAYER): void {
			var layer: egret.DisplayObjectContainer = this._layerMap.get(layerType);
			if (layer != null) {
				layer.addChild(source);
			}
			else {
				console.assert(false, "不存在该layerType！")
			}
		}


		/**
		 * 移除
		 */
		public removeFromLayer(source: egret.DisplayObject, layerType?: LAYER): void {
			if (source) {
				if (layerType) {
					let layer: egret.DisplayObjectContainer = this._layerMap.get(layerType);
					if (layer != null) {
						layer.removeChild(source);
					}
				}
				else {
					UIUtil.removeSelf(source);
				}
			}
			else {
				console.assert(false, "source为空！")
			}

		}


		/**
		 * 获得层级
		 */
		public getLayer(layerType: LAYER): egret.DisplayObjectContainer {
			return this._layerMap.get(layerType);
		}

		/**
		 * 释放
		 */
		public dispose(): void {
			this._layerMap.clear();
		}
	}
}

/**
 * 层级
 */
const enum LAYER {
	BG,
	SCENE,
	UI,
	BATTLE,
	MONSTER,
	BLACK_BG,
	POP,
	EFFECT,
}