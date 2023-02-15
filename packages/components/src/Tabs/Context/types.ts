export interface TabsContextData {
	activeID?: string;
	onTabClicked: (id: string) => void;
}
