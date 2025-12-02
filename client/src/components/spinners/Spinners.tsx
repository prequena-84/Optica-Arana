import { ClipLoader } from "react-spinners";

export default function Loading(color:string = "#36d7b7") {
    return (
        <div style={{ 
            height:"90vh",
            display: 'flex', 
            alignItems:"center",
            justifyContent: 'center', 
            marginTop: '2rem' }}
        >
            <ClipLoader 
                color={color}
                size={100} 
            />
        </div>
    );
};