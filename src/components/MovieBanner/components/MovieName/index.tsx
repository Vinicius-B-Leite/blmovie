import { Text } from "@/components/Text"

type MovieNameProps = {
	name: string
}
export function MovieName({ name }: MovieNameProps) {
	return (
		<Text variant="paragraphLarge" color="textOposite">
			{name}
		</Text>
	)
}
