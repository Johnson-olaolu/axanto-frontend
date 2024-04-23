import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import RetailImg from '../../../../../assets/images/multi-sector-images/retail.svg'
import EducationImg from '../../../../../assets/images/multi-sector-images/education.svg'
import NgoImg from '../../../../../assets/images/multi-sector-images/ngo.svg'
import FintechImg from '../../../../../assets/images/multi-sector-images/fintech.svg'
import ConsultingImg from '../../../../../assets/images/multi-sector-images/consulting.svg'
import EntertainmentImg from '../../../../../assets/images/multi-sector-images/entertainment.svg'
import GovermentImg from '../../../../../assets/images/multi-sector-images/governemnt.svg'
import BankingImg from '../../../../../assets/images/multi-sector-images/bank.svg'
import InsuranceImg from '../../../../../assets/images/multi-sector-images/insurance.svg'
import EngineeringImg from '../../../../../assets/images/multi-sector-images/engineer.svg'
import ManufacturingImg from '../../../../../assets/images/multi-sector-images/manufacturing.svg'
import LogisticsImg from '../../../../../assets/images/multi-sector-images/logistics.svg'


const multiSectorImagesData = [
    { name: "Retail", image: RetailImg },
    { name: "Education", image: EducationImg },
    { name: "NGO", image: NgoImg },
    { name: "Fintech", image: FintechImg },
    { name: "Consulting", image: ConsultingImg },
    { name: "Entertainment", image: EntertainmentImg },
    { name: "Government", image: GovermentImg },
    { name: "Banking", image: BankingImg },
    { name: "Insurance", image: InsuranceImg },
    { name: "Engineering", image: EngineeringImg },
    { name: "Manufacturing", image: ManufacturingImg },
    { name: "Logistics", image: LogisticsImg },
]

const MultiSectorImages = () => {
    return (
        <Box overflow={"hidden"} px={"16px"}>
            <Box maxW={"1280px"} mx={"auto"}>
                <Flex w={"100vw"} gap={"32px"} overflowX={"auto"} paddingRight={"200px"}>
                    {multiSectorImagesData.map((data, idx) => (
                        <Flex key={idx} flexShrink={0} rounded={"5px"} border={"1px solid rgba(0,0,0,0.06)"} shadow={"sm"} height={"284px"} width={"284px"} justifyContent={"center"} alignItems={"center"} direction={"column"} gap={"12px"}>
                            <Image src={data.image} />
                            <Text color={"black"} fontSize={"28px"} fontFamily={"Nexa"} fontWeight={"bold"}>{data.name}</Text>
                        </Flex>
                    ))}

                </Flex>
            </Box>

        </Box>
    )
}

export default MultiSectorImages