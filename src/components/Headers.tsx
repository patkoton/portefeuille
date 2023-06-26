export type HeadProps = {
    title?: React.ReactNode; 
    description?: React.ReactNode; 
    color?: 'primary' | 'secondary';
   
}
export function Headers({title, description, color}: HeadProps) {
    return (
        <div className="text-center font-roboto my-16">
            <h1 className="font-bold uppercase text-blue text-xl">{title}</h1>
            <h4 className="font-bold text-black text-2xl md:text-4xl mt-2 leading-6 md:leading-none">{description}</h4>
        </div>
    )
};