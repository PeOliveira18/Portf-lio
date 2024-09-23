
function DivisaoSection({numero, descricao}) {
    return ( 
        <div className="flex gap-2 m-auto text-center items-center p-4">
            <p className="text-texto-100 font-extrabold">{numero}</p>
            <p className="text-black dark:text-white-100 font-extrabold">{descricao}</p>
            <div className="h-0.5 w-full bg-white-200 dark:bg-gray-700 ml-2"></div>
        </div>
    );
}

export default DivisaoSection;