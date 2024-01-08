export type Breed = {
    id?: number,
    life_span?: string,
    origin?: string,
    name?: string
    temperament?: string,
    bred_for?: string,
    breed_group?: string,
    height?: { imperial: string, metric: string},
    weight?: { imperial: string, metric: string},
    image: { url: string },
}