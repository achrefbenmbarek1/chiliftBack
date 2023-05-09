
import path from 'path';
import fs from 'fs';

export const removeImage = (imageName: string) => {
    const imagePath = path.join(__dirname, '..', '..', '..', 'uploads', 'imagesArticle', imageName);

    fs.unlink(imagePath, (error) => {
        if (error) {
            return console.log(error);
            
        }
        console.log(`${imagePath} removed with success`);
    })
};
