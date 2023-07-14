import React, { useEffect } from "react";
import Profile from "../../components/profile/profile";
import Header from "../../components/header/header";
import { useParams } from "react-router-dom";
import './styles.css'
import './script.js'
import Footer from "../../components/footer/footer";


function ComprarIngresso(){
    const params = useParams();

    return (
        <div>
            <Header />
            <div id="divDiv">
                <div className="divToda">
                    <div className="Fileiras J" id="teste">
                        <div className="cadeiras cadeira01">J01</div>
                        <div className="cadeiras cadeira02">J02</div>
                        <div className="cadeiras cadeira03">J03</div>
                        <div className="cadeiras cadeira04">J04</div>
                        <div className="cadeiras cadeira05">J05</div>
                        <div className="cadeiras cadeira06">J06</div>
                        <div className="cadeiras cadeira07">J07</div>
                        <div className="cadeiras cadeira08">J08</div>
                        <div className="cadeiras cadeira09">J09</div>
                        <div className="cadeiras cadeira10">J10</div>
                    </div>

                    <div className="Fileiras I">
                        <div className="cadeiras cadeira01">I01</div>
                        <div className="cadeiras cadeira02">I02</div>
                        <div className="cadeiras cadeira03">I03</div>
                        <div className="cadeiras cadeira04">I04</div>
                        <div className="cadeiras cadeira05">I05</div>
                        <div className="cadeiras cadeira06">I06</div>
                        <div className="cadeiras cadeira07">I07</div>
                        <div className="cadeiras cadeira08">I08</div>
                        <div className="cadeiras cadeira09">I09</div>
                        <div className="cadeiras cadeira10">I10</div>
                    </div>

                    <div className="Fileiras H">
                        <div className="cadeiras cadeira01">H01</div>
                        <div className="cadeiras cadeira02">H02</div>
                        <div className="cadeiras cadeira03">H03</div>
                        <div className="cadeiras cadeira04">H04</div>
                        <div className="cadeiras cadeira05">H05</div>
                        <div className="cadeiras cadeira06">H06</div>
                        <div className="cadeiras cadeira07">H07</div>
                        <div className="cadeiras cadeira08">H08</div>
                        <div className="cadeiras cadeira09">H09</div>
                        <div className="cadeiras cadeira10">H10</div>
                    </div>

                    <div className="Fileiras G">
                        <div className="cadeiras cadeira01">G01</div>
                        <div className="cadeiras cadeira02">G02</div>
                        <div className="cadeiras cadeira03">G03</div>
                        <div className="cadeiras cadeira04">G04</div>
                        <div className="cadeiras cadeira05">G05</div>
                        <div className="cadeiras cadeira06">G06</div>
                        <div className="cadeiras cadeira07">G07</div>
                        <div className="cadeiras cadeira08">G08</div>
                        <div className="cadeiras cadeira09">G09</div>
                        <div className="cadeiras cadeira10">G10</div>
                    </div>

                    <div className="Fileiras F">
                        <div className="cadeiras cadeira01">F01</div>
                        <div className="cadeiras cadeira02">F02</div>
                        <div className="cadeiras cadeira03">F03</div>
                        <div className="cadeiras cadeira04">F04</div>
                        <div className="cadeiras cadeira05">F05</div>
                        <div className="cadeiras cadeira06">F06</div>
                        <div className="cadeiras cadeira07">F07</div>
                        <div className="cadeiras cadeira08">F08</div>
                        <div className="cadeiras cadeira09">F09</div>
                        <div className="cadeiras cadeira10">F10</div>
                    </div>

                    <div className="Fileiras E">
                        <div className="cadeiras cadeira01">E01</div>
                        <div className="cadeiras cadeira02">E02</div>
                        <div className="cadeiras cadeira03">E03</div>
                        <div className="cadeiras cadeira04">E04</div>
                        <div className="cadeiras cadeira05">E05</div>
                        <div className="cadeiras cadeira06">E06</div>
                        <div className="cadeiras cadeira07">E07</div>
                        <div className="cadeiras cadeira08">E08</div>
                        <div className="cadeiras cadeira09">E09</div>
                        <div className="cadeiras cadeira10">E10</div>
                    </div>

                    <div className="Fileiras D">
                        <div className="cadeiras cadeira01">D01</div>
                        <div className="cadeiras cadeira02">D02</div>
                        <div className="cadeiras cadeira03">D03</div>
                        <div className="cadeiras cadeira04">D04</div>
                        <div className="cadeiras cadeira05">D05</div>
                        <div className="cadeiras cadeira06">D06</div>
                        <div className="cadeiras cadeira07">D07</div>
                        <div className="cadeiras cadeira08">D08</div>
                        <div className="cadeiras cadeira09">D09</div>
                        <div className="cadeiras cadeira10">D10</div>
                    </div>

                    <div className="Fileiras C">
                        <div className="cadeiras cadeira01">C01</div>
                        <div className="cadeiras cadeira02">C02</div>
                        <div className="cadeiras cadeira03">C03</div>
                        <div className="cadeiras cadeira04">C04</div>
                        <div className="cadeiras cadeira05">C05</div>
                        <div className="cadeiras cadeira06">C06</div>
                        <div className="cadeiras cadeira07">C07</div>
                        <div className="cadeiras cadeira08">C08</div>
                        <div className="cadeiras cadeira09">C09</div>
                        <div className="cadeiras cadeira10">C10</div>
                    </div>

                    <div className="Fileiras B">
                        <div className="cadeiras cadeira01">B01</div>
                        <div className="cadeiras cadeira02">B02</div>
                        <div className="cadeiras cadeira03">B03</div>
                        <div className="cadeiras cadeira04">B04</div>
                        <div className="cadeiras cadeira05">B05</div>
                        <div className="cadeiras cadeira06">B06</div>
                        <div className="cadeiras cadeira07">B07</div>
                        <div className="cadeiras cadeira08">B08</div>
                        <div className="cadeiras cadeira09">B09</div>
                        <div className="cadeiras cadeira10">B10</div>
                    </div>

                    <div className="Fileiras A">
                        <div className="cadeiras cadeira01">A01</div>
                        <div className="cadeiras cadeira02">A02</div>
                        <div className="cadeiras cadeira03">A03</div>
                        <div className="cadeiras cadeira04">A04</div>
                        <div className="cadeiras cadeira05">A05</div>
                        <div className="cadeiras cadeira06">A06</div>
                        <div className="cadeiras cadeira07">A07</div>
                        <div className="cadeiras cadeira08">A08</div>
                        <div className="cadeiras cadeira09">A09</div>
                        <div className="cadeiras cadeira10">A10</div>
                    </div>
                    <br></br>
                    <button disabled className="tela">TELA</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ComprarIngresso;