import { QualityItem } from "./quality-item";

export function Quality(){
	return (
		<div className="flex gap-8 my-8">
			<QualityItem title="good quality"/>
			<QualityItem title="authentic"/>
			<QualityItem title="not expensive price"/>
		</div>
	)
}