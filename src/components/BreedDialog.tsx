import React, { useEffect, useState } from 'react';
import { Breed } from '../models/Breed';
import { Image, Text, ActionButton, Avatar, Button, Content, DialogTrigger, Divider, Flex, Header, Heading, View, DialogContainer, Dialog, TextArea, ButtonGroup } from '@adobe/react-spectrum';
import ImageSlider from './ImageSlider';
import * as constants from '../constants';
import BreedImage from './BreedImage';
import BreedTextDetails from './BreedTextDetails';
import { API_KEY, GET_BREEDS_PICTURE_URL } from '../config/url';

const { sizes, labels, position, route } = constants;


interface BreedProps {
    breed: Breed
}

const BreedDialog = ({ breed } : BreedProps) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchMoreImages = async () => {
        try {
            const response = await fetch(`${GET_BREEDS_PICTURE_URL}${breed.id}`, {
                headers: {
                    "x-api-key": API_KEY
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

            const jsonData = await response.json();
            setImages(jsonData.map((x: { url: string }) => x.url));
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    return <DialogTrigger type="fullscreen">
        <ActionButton onPress={() => fetchMoreImages()}>{labels.CLICK_ME}</ActionButton>
        {(close) => <Dialog>
            <Heading>{breed.name}</Heading>
            <Divider />
            <Content>
                <Flex direction={position.ROW} gap={sizes.SIZE_500} alignItems={position.CENTER}>
                    <ImageSlider items={images} loading={loading} />
                    <BreedTextDetails item={breed} />
                </Flex>
            </Content>
            <ButtonGroup>
                <Button variant="secondary" onPress={close}>Close</Button>
            </ButtonGroup>
        </Dialog>}
    </DialogTrigger>
}

export default BreedDialog;
