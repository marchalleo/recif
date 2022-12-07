import { Form } from "@remix-run/react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="contentFooter">
                <div className="textFooter">
                    <h4>Vous êtes intéressés ?</h4>
                    <p>Inscrivez-vous à la newsletters</p>
                </div>
                <div>
                    <Form method="post">
                        <input className="inputemail" type="text" name="email" id="email" />
                        <input className="submit" type="submit" value={"s'inscrire"} />
                    </Form>
                </div>
            </div>
        </div>
    )
}