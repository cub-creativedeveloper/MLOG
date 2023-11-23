import Image from "next/image";

const AboutUs = () => {
    return (
        <div>
            <Image src="/images/visionBanner.webp" className="h-40 w-full object-fill" alt="visionBanner" height={5000} width={5000}/>
            <div className="oviomis">
                <div>
                    <h2>Our Vision</h2>
                    <p>Building strong competitive services, highly cost effective,
                        Freight Forwarding and General Marine Services.</p>
                </div>
                <div>
                    <h2>Our Mission</h2>
                    <p>Satisfying our customers expectation, securely, promptly.</p>
                </div>
            </div>

            <div className="mt-6 px-6 text-primary_clr px-10">
                <h1 className="text-4xl font-medium my-6">About Us</h1>

                <p className="text-lg">
                    <b>MB LOGISTICS</b>. (RCCM No:1372747) is a maritime company that offers innovative solutions in Shipping Service, Service Boat Operator, Transportation, Freight Forwarding, Stevedoring Services, General Contractor, Offshore Oil & Gas sector and Maritime security system. <b>MB LOGISTICS</b> delivers goods and services to customers and international business partners. With access to an integrated global network of road, rail and sea transportation, the company prides itself on delivering global satisfactory services to clients.
                </p>
                <h1 className="text-4xl font-medium my-6">Our CEO</h1>
                <Image className="mx-auto h-full w-60 my-6" width={5000} alt="ceoimage" src="/images/ee (1).png" height={5000}/>
                <h3 className="text-center text-3xl text-gray-500 font-semibold">Mohammed Bashir</h3>
                <p className="text-center text-ms text-gray-500 ">Chief Executive Officer</p>
                <p className="text-lg my-8">
                A Pan-African Business Consultant, an entrepreneur with over 2 decades of professional experience. A devoted Innovator with vast experience and passion of creating opportunities across different sectors.
                </p>
                
            </div>
        </div>
    )
}

export default AboutUs