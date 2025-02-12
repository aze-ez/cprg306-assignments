import NewItem from "./new-item";

export default function Page() {
    return (
        <div className="relative min-h-screen bg-black">
        
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <NewItem />
            </div>
        </div>
    );
}
