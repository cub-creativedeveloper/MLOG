import { sectionTitleText, coreValues } from "@/components/home/coreValues";
import Image from "next/image";
import classNames from 'classnames';

const Corevalues = () => {
    const valueRow = coreValues.map((item, index) => {
        return (
            <div key={index} className=" p-3">
                <Image src={item.image} alt={item.img_alt} 
                width={100} height={75}  style={{ objectFit: 'cover', width: 'inherit', height: 'auto' }}/>
                <h3>{item.value}</h3>
                <p className={classNames({ 'text-ellipsis overflow-hidden': item.description.length > 111 })}>
                    {item.description}
                </p>
            </div>
        )
    });
    return (
        <section className="corevalsection">
            <h1 className="sectionTitleTxt">{sectionTitleText}</h1>
            <div className="corevalues">
                {valueRow}
            </div>

        </section>
    )
}
export default Corevalues;