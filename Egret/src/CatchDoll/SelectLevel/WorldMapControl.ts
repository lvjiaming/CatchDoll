/**
 * 控制器模板
 * @author suo
 */
module catchDoll {
	export class WorldMapControl extends BaseUIControl {
		/*视图*/
		private _view: WorldMapView;

		public constructor() {
			super();
		}

		/**
		 * 初始化
		 */
		public onInit(): void {
			this._view = this._viewCenter.getView(WorldMapView);

		}

		/**
		 * 点击选择关卡按钮
		 */
		private _onClickLevelBtn(): void {
			UICenter.instance.openUI(commonUI.BattleEnterPanel);
		}

		/**
		 * 显示时
		 */
		public onShow(): void {
			let view: FunctionUIView = UICenter.instance.getManager(commonUI.FunctionUI).getView(FunctionUIView);
			view.visible = true;
			this._view.illustrationsBtn.mouseClickHandler = Handler.create(null, () => {
				SimpleUICenter.instance.openUI(SIMPLE_UI.illustrations);
			})

			this._view.battleBtn.mouseClickHandler = Handler.create(null, () => {
				UICenter.instance.openUI(commonUI.BattleEnterPanel);
			})
		}



		/**
		 * 释放
		 */
		public dispose(): void {
			let view: FunctionUIView = UICenter.instance.getManager(commonUI.FunctionUI).getView(FunctionUIView);
			view.visible = false;
			this._view = null;
			super.dispose();
		}
	}
}