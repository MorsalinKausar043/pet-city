"use client"
import {
      Accordion,
      AccordionBody,
      AccordionHeader
} from "@material-tailwind/react";
import { Fragment, useState } from "react";


const ChooseUs = () => {
      const [open, setOpen] = useState(0);
 
      const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
      };
      
      const progressBarData = [
            { "id": 1, "title": "UI Design", "value": 80},
            { "id": 2, "title": "Branding & Identity", "value": 70},
            { "id": 3, "title": "JavaScript", "value": 60},
            { "id": 4, "title": "HTML5&CSS3", "value": 90},
            { "id": 5, "title": "WordPress", "value": 70},
            { "id": 6, "title": "PHP & MySQL", "value": 60},
            { "id": 7, "title": "SEO", "value": 45},
      ]
      return (
            <div className="bg-zinc-100">
                 <div className="px-2 md:px-10 lg:px-20 container py-10 md:py-16 mx-auto">
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                              <div> 
                                    <h1 className="text-xl md:text-2xl font-normal text-gray-600">
                                          Why People Choose Us?
                                    </h1>
                                    <Fragment>
                                          <Accordion open={open === 1}>
                                                <AccordionHeader onClick={() => handleOpen(1)} className="border-none">
                                                      <div className="flex items-center w-full">
                                                            {
                                                                  open === 1 ?
                                                                  <span className="w-11 h-11 font-bold text-center text-white bg-lime-500 border leading-10">-</span>
                                                                  :
                                                                  <span className="w-11 h-11 font-bold text-center text-zinc-500 bg-white border leading-10">+</span>
                                                            }
                                                            <span className="w-full h-11 px-5 py-2.5 text-sm text-left font-light bg-white border-t border-r border-b">Nunc varius vel diam et blandit</span>
                                                      </div>
                                                </AccordionHeader>
                                                <AccordionBody className="p-0">
                                                <div className="text-sm bg-white border p-5">
                                                            Vivamus eget elit ultricies, convallis urna in, sagittis nulla. Duis sollicitudin suscipit nisi. Etiam sit amet ipsum urna. Etiam mi diam, tincidunt in libero vel, commodo suscipit risus. Nam pharetra auctor volutpat.
                                                            <br />
                                                            <br />
                                                            Vivamus malesuada at nisl quis posuere. Aliquam interdum urna nec ligula viverra, non rhoncus enim iaculis.
                                                </div>
                                                </AccordionBody>
                                          </Accordion>
                                          <Accordion open={open === 2}>
                                                <AccordionHeader onClick={() => handleOpen(2)} className="border-none">
                                                      <div className="flex items-center w-full">
                                                            {
                                                                  open === 2 ?
                                                                  <span className="w-11 h-11 font-bold text-center text-white bg-lime-500 border leading-10">-</span>
                                                                  :
                                                                  <span className="w-11 h-11 font-bold text-center text-zinc-500 bg-white border leading-10">+</span>
                                                            }
                                                            <span className="w-full h-11 px-5 py-2.5 text-sm text-left font-light bg-white border-t border-r border-b">Morbi mollis turpis nec</span>
                                                      </div>
                                                </AccordionHeader>
                                                <AccordionBody className="p-0">
                                                <div className="text-sm bg-white border p-5">
                                                      Vivamus eget elit ultricies, convallis urna in, sagittis nulla. Duis sollicitudin suscipit nisi. Etiam sit amet ipsum urna. Etiam mi diam, tincidunt in libero vel, commodo suscipit risus. Nam pharetra auctor volutpat.
                                                      <br />
                                                      <br />
                                                      Vivamus malesuada at nisl quis posuere. Aliquam interdum urna nec ligula viverra, non rhoncus enim iaculis.
                                                </div>
                                                </AccordionBody>
                                          </Accordion>
                                          <Accordion open={open === 3}>
                                                <AccordionHeader onClick={() => handleOpen(3)} className="border-none">
                                                      <div className="flex items-center w-full">
                                                            {
                                                                  open === 3 ?
                                                                  <span className="w-11 h-11 font-bold text-center text-white bg-lime-500 border leading-10">-</span>
                                                                  :
                                                                  <span className="w-11 h-11 font-bold text-center text-zinc-500 bg-white border leading-10">+</span>
                                                            }
                                                            <span className="w-full h-11 px-5 py-2.5 text-sm text-left font-light bg-white border-t border-r border-b">Curabitur rhoncus ut elit tristique</span>
                                                      </div>
                                                </AccordionHeader>
                                                <AccordionBody className="p-0">
                                                <div className="text-sm bg-white border p-5">
                                                            Vivamus eget elit ultricies, convallis urna in, sagittis nulla. Duis sollicitudin suscipit nisi. Etiam sit amet ipsum urna. Etiam mi diam, tincidunt in libero vel, commodo suscipit risus. Nam pharetra auctor volutpat.
                                                            <br />
                                                            <br />
                                                            Vivamus malesuada at nisl quis posuere. Aliquam interdum urna nec ligula viverra, non rhoncus enim iaculis.
                                                </div>
                                                </AccordionBody>
                                          </Accordion>
                                    </Fragment>
                              </div>
                              <div>
                                    <h1 className="text-xl md:text-2xl font-normal text-gray-600 mb-4">
                                          Our Capabilities
                                    </h1>
                                    {
                                          progressBarData?.map( data => (
                                                <div key={data.id} className="w-full h-10 rounded-l-md  bg-white mb-5">
                                                      <div style={{width: `${ data.value }%`}} className="h-full px-3 flex items-center justify-between text-white bg-lime-500 rounded-l-md">
                                                            <span className="text-sm">{data.title}</span>
                                                            <span className="text-sm">{data.value}%</span>
                                                      </div>
                                                </div>
                                          ))
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ChooseUs;