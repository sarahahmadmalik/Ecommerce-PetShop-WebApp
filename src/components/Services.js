import React, { useState } from 'react';
import Card from './Card';
import groomingImg from "../assets/grooming.jpg";
import shotsImg from "../assets/vaccination.jpg";
import trainImg from "../assets/training.jpg";


function Services() {
  const [activeService, setActiveService] = useState(null);
  const[currService, setCurrService] = useState(null);
  const [open, setOpen] = useState(false);



  const services = [
    {
      id: 1,
      title: 'Grooming Services',
      image: `${groomingImg}`,
      description: 'Grooming services offered by vet clinics help maintain the cleanliness and appearance of pets. These services may include bathing, hair trimming, nail trimming, ear cleaning, and teeth brushing. Regular grooming not only keeps your pet looking neat but also contributes to their overall health and well-being. It helps prevent skin issues, reduces shedding, and minimizes the chances of infections.',
      pricing: 'Affordable grooming packages starting at $30',
      benefits: [
        'Maintain cleanliness and appearance of your pet',
        'Prevent skin issues and reduce shedding',
        'Professional grooming techniques and services',
        'Contribute to overall health and well-being',
      ],
    },
    {
      id: 2,
      title: 'Vaccination Services',
      image: `${shotsImg}`,
      description: 'Vaccination services provided by vet clinics help protect pets against infectious diseases. Vaccines stimulate the immune system to produce antibodies, providing immunity to specific diseases. Core vaccines, such as rabies, distemper, parvovirus, and hepatitis, are essential for every pet. Non-core vaccines, like those for Bordetella or Leptospirosis, are recommended based on the pet\'s lifestyle and risk factors. Keeping your pet up-to-date with vaccinations is crucial in preventing deadly diseases and ensuring a long and healthy life.',
      pricing: 'Essential vaccinations starting at $50',
      benefits: [
        'Protect your pet against infectious diseases',
        'Core and non-core vaccine options available',
        'Strengthen your pet\'s immune system',
        'Ensure a long and healthy life for your pet',
      ],
    },
    {
      id: 3,
      title: 'Pet Training Services',
      image: `${trainImg}`,
      description: 'Pet training services assist in teaching pets good behavior and obedience. This may involve basic obedience training, behavior modification, socialization programs, and puppy training classes. Training your pet not only improves their manners but also enhances the bond between you and your furry companion. It helps address behavioral issues such as barking, chewing, or aggression, making your pet a well-behaved member of your family. Additionally, socialization programs help pets feel more comfortable and relaxed in different environments and around other animals and people.',
      pricing: 'Personalized training sessions starting at $60 per session',
      benefits: [
        'Teach your pet good behavior and obedience',
        'Variety of training programs and classes available',
        'Address behavioral issues and improve manners',
        'Strengthen the bond with your pet',
      ],
    },
  ];
  


  const toggleDescription = (service) => {
    setActiveService(activeService === service.id ? null : service.id);
    setCurrService(prevService => prevService = service)
  };

  const handleClick = () => {
    setOpen(!open);
  };



  return (
    <div className="Services-portion">
      <div className="portion-label">
        <h3>Pet Services</h3>
      </div>
      <div className='cards' >
        {services.map((service, index) => (
          <div key={service.id} onClick={() => toggleDescription(service)}>
            <Card key={service.id} services={service} functionProp = {handleClick} isActive={activeService === service.id} isOpen = {open} classVar={`${index + 1}`}/>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default Services;