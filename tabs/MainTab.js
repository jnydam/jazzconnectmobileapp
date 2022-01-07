import React, {useContext, useEffect, useState} from 'react';

import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import HorizComponent from '../components/HorizComponent';
import { LocationContext } from '../LocationContext';
import axios from 'axios';
import PlaceEntry from '../components/UI/PlaceEntry';

import { processVenueResponse } from '../services/MainTabService';

const MainTab = (props) => {

    const locationObject = useContext(LocationContext);

    const [placeArray, setPlacesArray] = useState([]);

    const [dynamicLocation, setDynamicLocation] = useState("");

    const dummyPlaces = [
        {
            name: "Wally's Jazz Cafe",
            address: '427 Massachusetts Avenue',
            rating: 4.5
        },
        {
            name: 'Regattabar',
            address: '1 Bennet Street',
            rating: 3.2

        },
        {

            name: 'Scullers Jazz Club',
            address: '400 Soldiers Field Road',
            rating: 4.8
        }
    ]



    useEffect(() => {

        let latitude = 0;
        let longitude  = 0;
    
        if (locationObject.locationState != null) {
    
            if (locationObject.locationState.coords != null) {
    
            latitude = locationObject.locationState.coords.latitude;
            longitude = locationObject.locationState.coords.longitude;

            if (latitude == 42.296928) {
                setDynamicLocation("Boston");
            } else {
                setDynamicLocation("Cupertino");
            }

            axios.get(`http://localhost:3000/venues`)
            .then((res) => {

                  let processedDataArray = processVenueResponse(res.data);
                  setPlacesArray(processedDataArray);


            })
            .catch((err) => {
                setPlacesArray(dummyPlaces);

            });

        }
    }




    }, [locationObject]);


    const handleSwitchToDetail = (venueId) => {


        props.handleMainScreenDetailSwitch(venueId);


    };

    return ( 
    <View style={styles.mainTabContainer}>
        <Text style={{
            fontSize: 20,
            flex: 1
        }}>Welcome to JazzConnect!</Text>
        <View style={{
            flex: 1,
            margin: 5
        }}>
            <Text>
                An app where jazz enthusiasts can search
                for various clubs and play
                with other musicians around your area!
                
            </Text>
        </View>

        <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 2,
            marginBottom: 30

        }}>
            <HorizComponent 
            imageUrl="https://img.pixers.pics/pho_wat(s3:700/FO/59/34/20/91/700_FO59342091_64f363075751588711eb45aa5dd58c61.jpg,548,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,328,650,jpg)/stickers-jazz-saxophone-painting.jpg.jpg"
            title="About"
            navigation={props.navigation}
            ></HorizComponent>
            <HorizComponent 
            imageUrl="https://thumbs.dreamstime.com/b/splendid-jazz-trumpet-s-wooden-table-s-old-jazz-trumpet-player-129390547.jpg"
            title="Contact"
            navigation={props.navigation}
            ></HorizComponent>
            <HorizComponent 
            navigation={props.navigation}
            imageUrl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhgSEhUREhISEhESERESEREREg8QGBgZGhgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQsJCc0NDQ0NDQ0NDE0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND00NDQ0NDQ0MTQ0NP/AABEIAKMBNgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD4QAAICAQIEBAQDBgMHBQAAAAECABEDEiEEMUFRBRMiYQZxgZEyQqFScrHB0fAUI2IHM4KisuHxFkNjksL/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QAKBEAAgICAgEEAgIDAQAAAAAAAAECEQMhEjFhBCJBURMycYGRsdEU/9oADAMBAAIRAxEAPwDl4rj6x2jAi57Z82K5KMBZkxjPSFAbSIgx5I4SOkbTDTFtCEeICPOOFFEJKEA1R4qinAFUUeIQnDiSWIQirGSEbGAkgJMLJBIyiI5EKj1CeXH8uGhbA6ItEOFi0TqR1sBoi0Q+iLROpHWwGiLRD6JIJO0G2V9EWmWdEYpO0dsr6YxWHKRFJ1IFsrFZHTLBSRKQUMpFZlkCJZKwDCK0PGQMiQMIRIkRGUTBmMZIyBisZDXFGigGHXT1ktA7wEkFNXAmFryHGI944UjlAqxk1yEdYU0K0woyMOsmMvcQOu4VHHaOn5Ea8EtYPSMQOkkAp9pLyh0MNNi2kQ8uP5ZhPIPSIY2ENeBeXkHpPaNUNqYcx+kkmQfmENI7kyvUcrLhCH2/SR8hTyM7iDn9ldBe0uOoC7c4McORuCImYmMlQrdvQgu0ksko2kRGEsIsKpgkh1E5nIcCPpEdVkwsmyiRDy4xxw1REQWNSAFI4WFj1OsFANMWmH0xis6w0B0yJSGqRIjIRorlZErDkSBEdCNFciV3EtuJXyjeCSGiyuwkDCNIGSZZAmg2hWgmiMpEYmKMYoo4NZa4Zh+bcSiplnCDY9zQgi9hnHRPJuSQKHaDBl/juAbHRaiCOlzOjMCCLJiCBk1M5CtBVhApkMQuW+HYA7i5SKslJ0CViOphFzEdZFzZuQWHaFpPstLxJ6gQb7m5Lh8Wo1Lb+HMNwLEbfyLSvRQIiAknWjR5xgIDixixsRtGKkcxvCYHcbL+ssZsLDc0blEI+iuG2qowWHoVEixhCCLCrHCSWmK2NFDiEqQrYk7AKx325KT/ACmXg8RVcyo2fzkyDfIVK6G1ELZY3Ww51V+0jKaj2accHJaNio+mJCCARuCLB7gyVQikCsQEmBEROOGqRIkoxnI5sHUVR4o1CNgWEg0K4g35SiJSZXeAdrhcjSu0EmNFA2g2hDBtJMtEE0E0K0G0my0SBijGKIUA4lJIA3JIAHcnkJ6x8M/DCYkD5AHyEdRYW+gnlvhucY8yORYTIjEdwDPcfDfFMWXGHRhVD6TPklJL2/2asUYSl7v6K3G+EIykFQduonlfxD4d5OUqPwndflPXPEPEEVCdQFA73PJfiLxHzspYch6V9x3hwObTvoX1KgpLj2ZIMmpgrlHNx++lTS9SOZ+UrKaj2Sjjc+jaxNUMhnKvZN6r7bmafhfEEHS5tTyuyVPt7e06Ge3TQMnpqjaZtgXLvDeEZG3I0j35y54XwADagdYIBVuYI7zpsBrapXJPj0Z8WLl26RzvD+G6cgrkP1M2/K25Q64NTWolw8KQOUhPNdGvF6erOa8S8H1+pNj27zAbAytpYEET0TEgHMbzL8X4XUbVfnHxZrfGRLN6ao8o/wCDBQqVFe0t8Qw0gbkzF8Q41cDKGBotWw5Dqfpcs4OPRsvkg6m06thakUDQPXY3NLcb7MihPjda/wCBNG0ZFlh8DUTRr5dYm4fywDxDLw6t+EOGbLl/cxLbN86A94XkilbYkcc5SqKBhZYwcMzAkUqKupsjsExov7TMdgJi+KeJkKvkaUV9YD5cmFs/p2JOFWIxAkEDVZPtKGLw7I95DrzIfLVmfI6D1WxVgV1VsQCuwK9bFwlnvUEaoem47m6D+P8AjaC8XCuzgoyZc2nQrhgQyIp301tZ5/aYPC8Nqtjr0gbaVLFm6Ltym8vguFc2RWcsq+W+IgKvmY3C6dQHJgSVNbWp7iXW8NUCkZ07rqJUjtUSOOU/cy0s0Mb4pGjw3DMmHGx1acia1LAAi2PpIGwNaTXTVXSSuDxuwxpjJsY1IB33s+/sB+sbVNGOL47MeWceT49BbkS8GWja4/Ak5hC0e4HVHDw8TuZIxGDd4i3KHiLyGyGAyNtJ5m2lbI20PSF7ZBjAtJsYJpNsrFETBtDnC9Xoeu+lqgCYjLJEHgWhXMExiMpEgYoxMUmUAsJocD4jkx7I7KOwOxlIiSSCOmNKmjVz+Iu4pnYjsTt9pm5YQGUvEchC0PzGiew7R5ypWJjjcqKPHcXdqvLqe/tM6EeDM8+UnJ2z1YRUVSJAwiORyJghJCBMLR0vgPxXk4Y7gZsfqvGxCjURswerBuu+33GwP9ofEMwC8Pw9FgNAGRnaz+EHVzPynCY1sizQ79p6N/s48M4YZBlzMP8AEb/4ZG/AdOzOjcmf/TzXnW4Iom3sk4xT0emcPgCjcUaFjnR7QjmTMGTUmUIjCLuD4nhQ6lRtakWOa2Kse8KXnPeK/F/D4bRC3EZR/wC3hGvSf9b/AIV+9+0ZX8AdfJ5X4jjbAcnC5gzFXDI1/hIJDEX+VgfuqmV/CvFGwZ8WcAMcTDb9tbNqe+xI+Vdob4i8UPFZjnKlL9IBIYiiTRIAutVfITIIjtsmkqOuw+KcVlfI/CNnD58xbysYLMiANpC86oFdxXKFyfD+cMX4gqjMDrOs5MzHa9bWTe3f+k5zwfM6vSO2JiCVyKzKyMvqB9O/Tl7y9h8XcO65MuZ01ktoYK2Ug1YZrCWOoB+RlItXbIzjKmos2sODFiKoBqfUVVANeQMGKsNC/hNg9AfnLXHeJJhD49WrMylFxIrNbE7arrSQwVh12qt5z+Hi87HJ/hvMwYsnpZFyMQuMG9LZSAxskk1WqzYlnw3wxUOonU22wA08waIPPlNEXOapKkZJxx43ylJtlnFhLOcuRaJ06RrYtiCi9PIA7m/095oq8HlqBDzVGKiYZzlkd/RbDyOqVzkjeZHtCUy0zSKvK7ZIwedaBxZYOSROSBLSBaDkFRLBePr9MpcXxIxsEcEOVVtO1hWAIJ32sEGudEHkYayLU2CApZTsyhhqXUvNbBB37xVki3VlHhmlbTJk7QGQ7SRaDfoNhZrcgAfMnYTpMEI7LnhvDoxbJm1eTjosq/iysfw41+fU9BOZ8c8ad8jIoODErHTgUsFQjb1XuW9zLXjPiTpiXEhVVLOWZHDNkdW0m2G1ChVHfnOc4jMzm3ZnO5tmLHc2dzvzJP1nnZslukz1/TYajcka/h/xbxmD/c53UfssFyL9nBqE4r4xz5mLZ1wZiRRLYURum4ZKN7d5zkiTM/Jp38mzhFqq0dDw3Hq5qqPQXf2MM053h3pgRzBBm+GsA9xc1Y8jktmLNiUH7ehGPIkxoxKhSayIkgIUcwixuK4UvjNdN/7+sksfxPiDjxgLsXsX2A5/XcfeF1xbfQsb5pR7OYcVsefbrB3CjEzE0GY2AaBO55SFTz2esho9xlMe5xzJTa8J1NifFqVRqXIusikyLvqB/Ka2J7GYolrFnKihtvz/AEI9wQaqPBpO2Tmm1o95+F3c8HibLkGZyhLZAKH4j6f+Eemz+zM/j/iZNZThVfi8ikq3lD/KxtvWvIfSBY6X1nE/BmBeKdhkZvLxY/Vg1N5ebVQ3W+Wy2O6r9O441CvDvjwBMb6HXEFARVevT2rfrG4q/sXk6+jmczcbxbgK6ZMZClwhfFwqnmcZr1ZelknSb2E1+B+FsSkNk0O9KNCJ5eIVXJbPb6y94OyLiVMYoY9WN0oBsWVDTo4HIg/cFTyIi47jkHofJ5TZLVGFeYCdtSqedc75DrDt9dC6XfZyfxN4Tw/DhjqCrkyM/lgktZ6BZzOLwTzV83CScQJDlxTIwr0112IM1cXwxxGUekYxbMzZWDDzD3Dtbm/ah3m78JqreH5uHZdOXBxBV1A9T+ZWg13JVlH7sKpNKQHfFuPZy/CeFIpBtuoJsXRFHp7y94L8OBcrrlHmJjVGRitI+r8Jq99gQR3ErNlIJDOuMAkVsxsH9o7fa50ng3FFk8ssjgC0dCAb/ZYWfuPsJVxSlrogpScGn2B8Qx6aVQAB0AoCZxM0+NRt5lttNy/VHlS/Zj6pEmRuINDZ1C1RXIsZHVBY1E7iuC1RaoLDxDhozZlRGyOzDQVpUFu1sAWXcVpu7vYle8Fqmb4zxuxxWpxkataBvXlUWFs9AWANfXcbSzZOMdGj0+HlPa0ViX4lqLUq+rdQKOlFNAeyqOfICEfw7ILAfUpA2LH8oAGx5bADY9Ja8LSsS2K5kdyG3sy2GkoYk42+2WyeokpNR6RWbxTSQM2N0F7nGdYI/wBIYj/qPzjZeOxZAqo9MxW1ddGknoWJrY+8sZUDDSQGB6GZnF+Ep+Qsv+lqYVvvq2N8tq+sM/yLp2gY3hl2qZn+K8SXyN+EIhKoqKVRVHIKp3Hc3uSSTKLtJZsZBI7Ei+9QJMwSbPUilWhiYxjExRB6LXAYdbheV9e3vNtBQA7bSv4LhARnI5Cge7H/AMw5M1Yo1GzDnlylX0IxSBMUrZKgywyJBY5fxITKxjZCcuIsGHeaePh1caWUMOxF17jsZUxYzdTU4BK595oUUl0ZZSfLTOf+IPDcWHF/lFkdmDBdRbUB15+mru/kOs5B3JNnmTZnb/G6gBG2LUR7gXYP6GcUV3Oxr+FieXnS50j2vSybhctkBJSWPDfWpMcKbqRSZobX2QSWfKK1ex7dY+Lg8gYUpbvp32/lOy+GFxKz5OK8sEBExeaAQB6ixF8vyysI2RyTSI/7P+HyLxJcBhjKMMhI2NiwL72VM7rM4uVOH4lGHodGUbAIylQPpJnHZuaFBJmSWRtFTxLwvDmbU4YZKVfMRiuTSOSlhzAobGPwfhONXOQB3yMQWfKzZXYjkSW5mWLA5kAe5qWEdboEfKxOaroCk32y7wWPU6qeV237o3P6CcZxwPB5+JzaxkOTyvLUDQdZDgFqNbDrtzPKdlj4pMSPlc0AoRBzLO17AdTSn9ZwnjKJmyFzm3sNpKBk1C6vemqz9zJJOUvBdyUY18v/AEctlyEnUyYjf4QdZWuytZH6y14Wiu/+UWxZhZOK7D1z0dz7c+1wHEIysdIXVuWRQNLL+0o/Mvt0/g2FPMXUlrkx01AkMtHmDzq/qIH2Muju8ObXiRzzoq+9+tdj+mk/WZnG46a+kveDccOI4XUdsqZGGUcrdgPXXTVp+4aB4rlPQwu4nlepjxmZZMizR2gWMLYkUS1RiZAmMG/Tn7RbKcSdyIMcg1dGjYBo0Tsdj9R9xBMSFZgL0qzdth/dfWBsKjeguXH/AJbOWRNIXSGcKzFiaUAbj8J3Ne12JgIBkyaVLhSxIU+oKNROx6UtfW4HisxatRr1bKBsL5k+8rrl0PaMdidJI0kjpYBNbdLMw5MiclfR6eLC4waXZ1g2FDkAAPlFco+HcZ5trVOBem/xAcyv8a/sWrmyMlJWjz543F1LsJe8bOYwO4kcxhb0IlsyPFcY2P5jz+VTGYTpc4UqdVV77V9ZhccArMEYMoYgOPzChX0/oZhzKnZ6vppWqKpjXGuNM1mujc8NznQU2q1PSxz2/vtLJMxeHy6ORJNb9hB5uOY7AkD22uaFlUY7MssDlNtdG2THnMHIe5+8UT8/gb/yeTs8fDsBdGpu+H8Pqr23Mr8Ll29us0eAFsSPw9J6sYpK0eHknKTpouLwq9BvCJw9Q2CHC0YsslDRw3uinxHh+PJXmor0pUXzUHt2O3Oc94l4bh4bg2VlObIXvGzUmgkHnW5AHIdz0nYggicl8Z5hePF+9kb6+lf/ANSE6kvJrx8otV0cQMJrmZc4TA3PUygnYbEt9+Q95c4dsesBhqAVjQ6sB6QT8yPtHy5NNk0CdgByA51JxxxW2Wllk9JD8TxAVasD+Z77TOw5vVdajzGr1V70dh/e8HxGYM1nehyuCbJ02A7DYfXvFlO2Pjx0vLNN/GsijSGN9wTpT90DYn3O0LwPjro2vU5NUzFmYkdqO36TGGXTyNfKQLljuSfmSYrySvsf8Ua6N/P8Q5XAdyCbOldNAV1r+sB/6izg2uQg9PShr2FiZBMeoXkk/kCxxXwX+N8Yz5f95lZh+yCFX/6rQlQZmHJm+jGD0yQSJbY2kFTK3c3qDBr3Vu4/v+AmtgZS6ZEbRkBGsFaDHkSK2ojp7zIQAQnme8ePkSV/B3ng+MDiMhxj/LyY1c1yDhq/hZ+phvEsdcpS+F2K4yz/AJyNN89Ivf8AWW/EeIBE24U0eb6lqX8mNkO8rOxBGynf8wYr8m0kED3lhskA7Rpk8evgw83GE2H1Kw9NAlQCCbsd/wCkz3yXN7xzBiXAH9a5nygqNPobCMa6nvvr1Dr15VvzYaedkbTpntYopx5JG14Wjab1MFBYhbNE0LNcuQH2h+K4u1pSATZ1agAKG4IrnuR/C9oDHk04lFH1WDR3595Q4jiyw02wQXpTUSFsnaUc+MKRFQc5uT+wLdd7PeDY3vX9Jf8ADMVm2UMNwb5AV/Gz+ku58OBR6gBYPU39JNY3KN2VeVRlxpv+DDx5SpDAkFSCCCQQR1BHKb3B8eHIWjqagABZLfIfymA4F+k2LNE7Ej5dIsOVkOpSVYAgEbEagQf0JiwySiymTFHItnVtlVT6iq0SDbDYjYiZvG+KiyEGr3Ow+neYqZa2oEdiJcwcTir1IdVHmbBP8pR53PS0QXpYwdtNkAjZLZiaB68h8u0jxAVQqqAWA9Tb7nv/ANpYyZAFCoL52Rdar3P9BM/PkA2HPqepMjKq8l4W34+iLgL7nt2gi0gTFci2aFEnroSDNcjGMDYyQoo0UAT0Hhrvbkec3eBxEda9pg8FkFibeDPU9mUuMdHz0cfKWzcxnaSD77yhi4iF8yZHM3Rx60WnftPN/ifjC/FPvslIPbSN/wBbnfF55d4i95srd8uQ/wDOYrloeOOnY3DZPWCeoP8AKH4nNZmaXplPtX6wuTJAp6aGlj2mMzRishqiDxLKUTCdzJDaDuLVDYGmEuODBa4tc6wcQ4MWqA1ySw2BxC6u00fC+D1uL5Ddj+yP6ytwvCM/JTXVjsom7wpGNdK8/wAx7mWxQ5O30Z82RRVLs29QAAXYAUB2EpcRl6XKX+LMC+WbOdHnfjtljI4lYvZAHUgfUwD5bgcHGjHnXI41LitwvRsgB0qfax/GRnko04sN6I/FeYeecSszJgUYxqNhX55Ao6DXq+0xcS2wHv8AeRzZCzFibJJJPcmG4F6Or9ncfvdP6/SYHLlLZ6ijxjo1+O4vLhT/AAzDEyq2pnVCG8wrvjZuR0kkV7TEJPzvr3MLnztYpj7VQIFk9PzWTI8KgLdCBe++/wB4W7dHJJRtmlwhcCqAA5EjYkj2Py6SDcFqYtkayeg2AhRkiDy9KqZk5SttaJ4sSr+EAe9bn6zL8UddVKACB6q6np+n8ZoHJMHI+oknmSTJ5mlGkWwRbk5MbVGJkYiZms10TXIRyiLFtuZ6QVxXBY3EkyEcxFX3kNUk7ztBpkTGJjExoApDxRCKcE6zgs+2/MTWxZpzfD5Kmphz7Tep+08h4vedFg4mWv8AEznMfEVLA4qQk9muK0bR4mcBxq6cmQf/ACOP+YzpRxU53jjqyOOuskfUA/ziqQzVmZk5X2N/SMH7wuX031sSndcoG6HirQfXFrggR1qKCw8QmuLXBExtcFncQ1ySwBc/KJWhUjnEtA1NLwwgFX7OVv5gV/OZuCmNHt/ZmvwHD6qHJFZWvvXP6mOn8kpL4Nzgk04xfM2x+Z/7VK+Zxqh2zTP4rflLY8pnzYLVjZMm8rnLI8we8qs8eUyUcYd8tTPy5rHyBYDqWJ2/r94TI1+nnfQCyewEoZiysQbVlO/QgyGSZrxY12RLS1iqgvLrYF79NvsPrKibm5N2v36DoTJJ1su1ehmaXvDOLZLVdJVgQwKg6hRo79j/AB6TNJ/8wuHJpYbmutdYE9hcfbo1dcWuVtfY2O8bXL8zJwLOuVc6Kb2qhuRtZj+ZAu/IfUwSlaHhFplZ1q/ar9oMmFyN0Heye57wLNMzNSFca40U4cUUUUBwooo844kBGjExQ2CjUx85dxxRTVHowy7LCGFuKKTZSJJTMvif963/AA/9I/pFFFKIo8V+KVTFFFY8RjGiigGFFFFOOHjiKKccH4b8a/vL/GdSNhttFFCJ8kWMgY8UKFZVbnA5IopdGeRm8WxDbbURXtylZtzZ3J5+8UUhLs1Q/VFjB+A/X+ErGPFOfSOXbIxRRRRw2DrDRRR49EpdiMAeZ+RiinSDECeUhFFJsqhRRRQBFGiinHDiKKKccNFFFOOP/9k="
            title="Register"
            ></HorizComponent>


        </View>

        <View style={[{
            backgroundColor: '#FFD580',
            flex: 8,
            width: '100%',
            borderRadius: 30,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            alignItems: 'center'
        }, {
            shadowColor: 'black',
            shadowRadius: 5,
            shadowOpacity: 1
        }]
        }>
            <Text style={{
                marginTop: 15,
                fontSize: 24,
                textAlign: 'center',
                marginBottom: 10
            }}>Venues Near You</Text>
            <Text style={{textAlign: 'center', marginBottom: 10}}>Places Near: {dynamicLocation}</Text>
            <ScrollView style={{width: '100%'}}>
            {placeArray.map((placeObject) => (
                <View key={placeObject.name} style={{alignItems: 'center'}}>
                    <PlaceEntry name={placeObject.name}
                     address={placeObject.address}
                     id={placeObject.id}
                     handlePlaceClick={handleSwitchToDetail}></PlaceEntry>
                </View>
                
            ))}
            </ScrollView>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    mainTabContainer: {
      marginTop: 10,
      alignItems: 'center',
      flex: 9
    }
});



export default MainTab;

 