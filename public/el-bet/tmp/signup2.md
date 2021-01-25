<form method="POST" id="lightboxRegisterForm">
<div class="stageContainer stage1" style="display: none;">
<p class="subHeader">Already a registered member? Simply <a href="#" onclick="openLogin();">Login</a></p>
<fieldset class="fieldset full noLine noMargin  clearfix correct">
<label class="" for="registerLoginInput"><span>*</span>User Name</label>
<div class="inputContainer text">
<input type="text" class="" tabindex="1" value="" title="" name="Login" id="registerLoginInput" regex="englishOnly:=true||required:=true||noWhiteSpace:=true||alphanumeric:=true||minlength:=6||maxlength:=15||remote:=https://www.El Bet.com/wp-content/plugins/GS_ajax/GS_ajax.php?action=GS_ajaxUserAvailable&amp;lang=en" errormsg="englishOnly:=Please enter only english characters.||remote:=This user name is already been taken.||required:=This field is required||noWhiteSpace:=No white space please.||alphanumeric:=Letters numbers or underscores only please.||minlength:=Please enter at least {0} characters.||maxlength:=Please enter no more than {0} characters." error="false">
</div>
</fieldset>
<fieldset class="fieldset full  clearfix correct">
<label class="" for="registerEmailInput"><span>*</span>E-mail</label>
<div class="inputContainer text">
<input type="text" class="" tabindex="2" value="" title="" name="Email" id="registerEmailInput" regex="englishOnly:=true||required:=true||email:=true||maxlength:=100||remote:=https://www.El Bet.com/wp-content/plugins/GS_ajax/GS_ajax.php?action=GS_ajaxEmailAvailable&amp;lang=en" errormsg="englishOnly:=Please enter only english characters.||required:=This field is required||maxlength:=Please enter no more than {0} characters.||email:=Please enter a valid e-mail address.||remote:=This e-mail address already exists." error="false">
</div>
</fieldset>
<fieldset class="fieldset full correct">
<label class="" for="registerPasswordInput"><span>*</span>Password</label>
<div class="inputContainer text">
<input type="password" class="" tabindex="3" value="" title="" name="Password" id="registerPasswordInput" regex="required:=true||strongPassword:=true||notEqual2:=Email,Login" errormsg="notEqual2:=Cannot  have the same value as your user name or e-mail address.||required:=This field is required||strongPassword:=The password must have at least 8 characters combined with digits and letters, and should contain at least 4 different characters in it." aria-autocomplete="list" error="false">
<div class="passwordStrengthMeter strong"></div></div>
</fieldset>
<fieldset class="fieldset full correct">
<label class="" for="registerconfirmpswInput"><span>*</span>Retype Password</label>
<div class="inputContainer text">
<input type="password" class="" tabindex="4" value="" title="" name="confirmpsw" id="registerconfirmpswInput" regex="password:=true||equalTo:=Password||required:=true" errormsg="password:=A valid password is required.||required:=This field is required||equalTo:=Same value as the password is Required." error="false">
</div>
</fieldset>
<input type="hidden" name="currency" regex="englishOnly:=true||required:=true" errormsg="englishOnly:=Please enter only english characters.||required:=This field is required" value="EUR" error="false">
<fieldset class="fieldset full  clearfix correct">
<label class="" for="registerbonusCodeInput">Registration Code</label>
<div class="inputContainer text">
<input type="text" class="" tabindex="7" value="" title="" name="bonusCode" id="registerbonusCodeInput" regex="englishOnly:=true||noWhiteSpace:=true||minlength:=4||maxlength:=20||remoteBonusCode:=https://www.El Bet.com/wp-content/plugins/GS_ajax/GS_ajax.php?action=GS_ajaxBonusCodeAvailable&amp;lang=en" errormsg="englishOnly:=Please enter only english characters.||noWhiteSpace:=No white space please.||minlength:=Please enter at least {0} characters.||maxlength:=Please enter no more than {0} characters." error="false">
</div><div class="clear inputDescription medium"><span class="small">(This is optional and will not affect your welcome package bonuses)</span><div class="bonusCode"></div></div>
</fieldset>
<div class="clear"></div>
<fieldset class="fieldset full correct">
<div class="inputContainer checkbox"><input type="checkbox" class="checkboxInput" name="over18" tabindex="8" id="registerover18Input" value="1" regex="required:=true" errormsg="required:=This field is required" error="false"></div>
<label for="registerover18Input" class="checkboxLabel">I'm over 18 years of age and accept these <a class="popupLoader" href="/general-terms-conditions/?isPopup=true" popupscroll="true">Terms &amp; Conditions</a></label>
</fieldset>
<input type="hidden" name="TNCVersion" regex="required:=true" errormsg="" value="273312" error="false"><input type="hidden" name="TNCType" regex="required:=true" errormsg="" value="TNC" error="false">
<fieldset class="fieldset full noLine noMargin">
<a href="#" class="submitInput right">
<span>Continue</span>
</a>
</fieldset>
</div>
<div class="stageContainer stage2" style="">
<fieldset class="fieldset noLine noMargin  clearfix">
<label class="" for="registerfnameInput"><span>*</span>First Name</label>
<div class="inputContainer text">
<input type="text" class="" tabindex="1" value="" title="" name="fname" id="registerfnameInput" regex="textOnly:=true||required:=true" errormsg="textOnly:=You cannot enter special characters in this field (!, @, #, $, %, &amp;, *, ?...)||required:=This field is required||minlength:=Please enter at least {0} characters.">
</div>
</fieldset>
<fieldset class="fieldset noLine noMargin right  clearfix">
<label class="" for="registerlnameInput"><span>*</span>Last Name</label>
<div class="inputContainer text">
<input type="text" class="" tabindex="2" value="" title="" name="lname" id="registerlnameInput" regex="textOnly:=true||required:=true" errormsg="textOnly:=You cannot enter special characters in this field (!, @, #, $, %, &amp;, *, ?...)||required:=This field is required||minlength:=Please enter at least {0} characters.">
</div>
</fieldset>
<fieldset class="fieldset ">
<label for="registerBirthDayInput" class=""><span>*</span>Birth Date</label>
<div class="inputContainer dateGroup">
<div class="selectInputWrap">
<select class="selectInput noWidth" name="_birthDayDay" id="registerBirthDayInput" tabindex="3" onchange="">
<option value="dd">dd</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
</div>
<div class="selectInputWrap">
<select class="selectInput noWidth" name="_birthDayMonth" id="registerBirthMonthInput" tabindex="3">
<option value="mm">mm</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select>
</div>
<div class="selectInputWrap noMargin">
<select class="selectInput noWidth" name="_birthDayYear" id="registerBirthYearInput" tabindex="3"><option value="yyyy">yyyy</option><option value="1920">1920</option><option value="1921">1921</option><option value="1922">1922</option><option value="1923">1923</option><option value="1924">1924</option><option value="1925">1925</option><option value="1926">1926</option><option value="1927">1927</option><option value="1928">1928</option><option value="1929">1929</option><option value="1930">1930</option><option value="1931">1931</option><option value="1932">1932</option><option value="1933">1933</option><option value="1934">1934</option><option value="1935">1935</option><option value="1936">1936</option><option value="1937">1937</option><option value="1938">1938</option><option value="1939">1939</option><option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option></select>
</div>
<input type="hidden" value="" name="birthdate" id="registerbirthdateInput" regex="required:=true||date2:=true||minimumAge:=18" errormsg="required:=This field is required||date2:=Please enter a valid date.||minimumAge:=You must be at least {0} years old.">
</div>
</fieldset>
<fieldset class="fieldset right  clearfix">
<label class="" for="registercityInput"><span>*</span>City</label>
<div class="inputContainer text">
<input type="text" class="" tabindex="7" value="" title="" name="city" id="registercityInput" regex="textOnly:=true||required:=true||minlength:=2" errormsg="textOnly:=You cannot enter special characters in this field (!, @, #, $, %, &amp;, *, ?...)||required:=This field is required||minlength:=Please enter at least {0} characters.">
</div>
</fieldset>
<fieldset class="fieldset ">
<label class=""><span>*</span>Gender</label>
<div class="inputContainer radio">
<input type="radio" name="gender" id="registermaleInput" tabindex="4" value="male" class="radioInput" regex="required:=true" errormsg="required:=This field is required">
<label for="registermaleInput" class="radioLabel">Male</label>
<input type="radio" name="gender" id="registerfemaleInput" tabindex="4" value="female" class="radioInput" regex="required:=true" errormsg="required:=This field is required">
<label for="registerfemaleInput" class="radioLabel">Female</label>
</div>
</fieldset>
<fieldset class="fieldset right  clearfix">
<label for="registerLangInput" class=""><span>*</span>Language</label>
<div class="inputContainer">
<select class="selectInput" name="Lang" id="registerLangInput" tabindex="5" regex="required:=true" errormsg="required:=This field is required">
<option value=""></option>
<option value="en" selected="selected">English</option><option value="de">Deutsch</option><option value="fr">Français</option><option value="it">Italiano</option><option value="ru">Русский</option><option value="es">Español</option><option value="fi">Suomi</option><option value="nb">Norwegian Bokmål</option><option value="sv">Svenska</option>
</select>
</div>
</fieldset>
<fieldset class="fieldset  clearfix">
<label for="registerCountryInput" class=""><span>*</span>Country</label>
<div class="inputContainer">
<select class="selectInput" name="Country" id="registerCountryInput" tabindex="6" regex="required:=true" errormsg="required:=This field is required">
<option value=""></option>
<option value="AF">Afghanistan</option><option value="AX">Aland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BL">Barthele</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, st. Eustatius, and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet island</option><option value="BR">Brazil</option><option value="IO">British Indian ocean territory</option><option value="BN">Brunei Darussalam</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad </option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo, Republic of</option><option value="CD">Congo, the Democratic Republic of the</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia </option><option value="CU">Cuba</option><option value="CW">Curacao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="TL">East Timor</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FO">Faeroe Islands</option><option value="FK">Falkland Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="DE">Germany </option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and Mcdonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran </option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan </option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Lao </option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya </option><option value="LI">Liechtenstein </option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao </option><option value="MK">Macedonia</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia </option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique </option><option value="MM">Myanmar </option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="AN">Netherlands Antilles </option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MP">Northern Mariana islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestinian Territories</option><option value="PA" selected="selected">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russian Federation</option><option value="RW">Rwanda</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin </option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao tome and Principe</option><option value="SA">Saudi Arabia </option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten</option><option value="SI">Slovenia</option><option value="SB">Solomon islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the south sandwich islands</option><option value="KR">South Korea</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syrian Arab republic</option><option value="TW">Taiwan </option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab emirates</option><option value="GB">United kingdom</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican city</option><option value="VE">Venezuela</option><option value="VN">Viet Nam</option><option value="VG">Virgin islands, British</option><option value="VI">Virgin islands, U.S.</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>
</select>
</div>
</fieldset>
<fieldset class="fieldset right  clearfix">
<label class="" for="registeraddressInput"><span>*</span>Address</label>
<div class="inputContainer text">
<input type="text" class="" tabindex="8" value="" title="" name="address" id="registeraddressInput" regex="textOnly:=true||required:=true||minlength:=2" errormsg="textOnly:=You cannot enter special characters in this field (!, @, #, $, %, &amp;, *, ?...)||required:=This field is required||minlength:=Please enter at least {0} characters.">
</div>
</fieldset>
<fieldset class="fieldset  clearfix">
<label class="" for="registerzipcodeInput"><span>*</span>Zip / Post code</label>
<div class="inputContainer text">
<input type="text" class="" tabindex="9" value="" title="" name="zipcode" id="registerzipcodeInput" regex="englishOnly:=true||required:=true||maxlength:=10||minlength:=2
" errormsg="englishOnly:=Please enter only english characters.||required:=This field is required||minlength:=Please enter at least {0} characters.||maxlength:=Please enter no more than {0} characters.">
</div>
</fieldset>
<fieldset class="fieldset right ">
<label for="registermobileInput" class=""><span>*</span>Mobile</label>
<div class="inputContainer text phoneGroup">
<input type="text" class="prefixInput tiny float" tabindex="10" name="_prefixmobile" id="registerPrefixmobileInput" value="">
<div class="spacer"></div>
<input type="text" class="small float" tabindex="10" name="_mobile" id="registermobileInput" value="">
<input type="hidden" name="mobile" regex="englishOnly:=true||required:=true||phoneRequired:=true" errormsg="englishOnly:=Please enter only english characters.||required:=This field is required||phoneRequired:=A valid phone is required." value="507-">
</div>
</fieldset>
<div class="clear"></div>
<div class="pleaseConfirmData">Please enter your details as they appear on an official ID. By submitting your registration, you authorize us to verify your information against official sources.</div>
<fieldset class="fieldset full noLine">
<a href="#" class="submitInput right">
<span>Register</span>
</a>
</fieldset>
</div>
</form>