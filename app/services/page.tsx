import { services } from "../../components/serviceList";
import ServiceItem from "@/components/ServiceItem";

const Services = () => {


    return (
        <div className="w-4/5 mx-auto my-9">
            {services.map((item, index) => (
                <ServiceItem key={index} item={item} index={index} />
            ))}
        </div>
    )
}

export default Services