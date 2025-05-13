import { BooleanInput, Create, NumberInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from "react-admin"

export const ChallengeOptionCreate = () => {
    return(
        <Create>
            <SimpleForm>
                <TextInput 
                source="text"  
                validate={[required()]} 
                label="Text"/>
                <BooleanInput 
                source="correct"
                label="Correct Option"
                />

                <ReferenceInput 
                source="challengeId"
                reference="challenges"/>


                <TextInput 
                source="imageSrc"
                label="Image Url"/>
                <TextInput 
                source="audioSrc"
                label="audio Url"/>
            </SimpleForm>
        </Create>
    );
};