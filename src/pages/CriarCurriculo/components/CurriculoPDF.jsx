import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

import Arial from '../../../fonts/arial.ttf';
import ArialBold from '../../../fonts/arialbd.ttf';
import ArialItalic from '../../../fonts/ariali.ttf';
import ArialBoldItalic from '../../../fonts/arialbi.ttf';

Font.register({
    family: 'Arial',
    fonts: [
        { src: Arial, fontWeight: 'normal', fontStyle: 'normal' },
        { src: ArialBold, fontWeight: 'bold' },
        { src: ArialItalic, fontStyle: 'italic' },
        { src: ArialBoldItalic, fontWeight: 'bold', fontStyle: 'italic' },
    ],
});

const styles = StyleSheet.create({
    page: {
        paddingTop: 72,
        paddingBottom: 72,
        paddingLeft: 72,
        paddingRight: 72,
        fontFamily: "Arial",
        fontSize: 12,
        lineHeight: 1.16,
    },
    section: { marginBottom: 10 },
    sectionXP: { paddingRight: 23, marginBottom: 10 },
    titulo: { fontSize: 15, fontWeight: "bold", marginBottom: 14 },
    texto: { textAlign: "left", letterSpacing: 0.077 },
    textoXP: { textAlign: "left", letterSpacing: 0.1, lineHeight: 0.88 },
    resumo: {
        textAlign: "left",
        letterSpacing: 0.09,
        lineHeight: 0.88,
        marginBottom: 20,
    },
    nome: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 17,
        textTransform: 'uppercase',
    },
    infoPerfil: { fontSize: 12, textAlign: "center", marginBottom: 10 },
    emailPerfil: {
        fontSize: 12,
        color: '#2A6CB4',
        textDecoration: 'underline',
        textAlign: 'center',
        marginBottom: 9,
    },
    empresa: {
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: 9.5,
    },
    cargo: { fontWeight: "bold", marginBottom: 10 },
    projeto: { fontWeight: "bold", fontStyle: "normal", marginBottom: 2 },
    linhaPeriodo: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 6.8,
    },
    periodo: {
        marginBottom: 4,
    },
    linhaHifen: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 18
    },
    hifen: { fontSize: 10, marginRight: 13.5, marginTop: 1 },
    sectionBullet: { marginBottom: 21 },
    linhaBullet: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 18,
        marginBottom: 2.5,
    },
    bullet: {
        fontSize: 10,
        fontWeight: 'bold',
        marginRight: 12,
        marginTop: 1,
    },
});

const CurriculoPDF = ({ dados }) => (
    <Document>
        <Page size="A4" style={styles.page}>

            {/* Perfil */}
            <Text style={styles.nome}>{dados.perfil.nome}</Text>
            <Text style={styles.infoPerfil}>{dados.perfil.idade} anos</Text>
            <Text style={styles.infoPerfil}>{dados.perfil.cidade}, {dados.perfil.bairro}/RJ</Text>
            <Text style={styles.infoPerfil}>{dados.perfil.telefone}</Text>
            <Text style={styles.emailPerfil}>{dados.perfil.email}</Text>

            {/* Objetivo */}
            {dados.objetivo && (
                <View style={styles.section}>
                    <Text style={styles.titulo}>OBJETIVO</Text>
                    <Text style={styles.texto}>{dados.objetivo}</Text>
                </View>
            )}

            {/* Resumo Profissional */}
            {dados.resumo && (
                <View style={styles.section}>
                    <Text style={styles.titulo}>RESUMO PROFISSIONAL</Text>
                    <Text style={styles.resumo} hyphenationCallback={(word) => [word]}>
                        {dados.resumo}
                    </Text>
                </View>
            )}

            {/* Formação Acadêmica */}
            {dados.formacoes.length > 0 && (
                <View style={styles.sectionBullet}>
                    <Text style={styles.titulo}>FORMAÇÃO ACADÊMICA</Text>
                    {dados.formacoes.map((formacao, index) => (
                        <View key={index} style={styles.linhaBullet}>
                            <Text style={styles.bullet}>●</Text>
                            <Text style={styles.texto}>
                                <Text style={{ fontWeight: "bold" }}>{formacao.curso}</Text> ({formacao.universidade}), {formacao.status}
                            </Text>
                        </View>
                    ))}
                </View>
            )}

            {/* Experiência */}
            {dados.experiencias.length > 0 && (
                <View style={styles.sectionXP}>
                    <Text style={styles.titulo}>EXPERIÊNCIA</Text>

                    {dados.experiencias.map((exp, index) => (
                        <View key={index} style={{ marginBottom: 20 }}>
                            <View style={styles.linhaHifen}>
                                <Text style={styles.hifen}>-</Text>
                                <Text style={styles.empresa}>{exp.empresa.toUpperCase()}</Text>
                            </View>
                            <Text style={styles.cargo}>{exp.cargo}</Text>
                            {exp.projeto && <Text style={styles.projeto}>{exp.projeto}</Text>}
                            <View style={styles.linhaPeriodo}>
                                <Text style={styles.periodo}>{exp.inicioMes} de {exp.inicioAno} – {exp.fimMes} de {exp.fimAno}</Text>
                            </View>
                            {exp.atividades.map((atividade, i) => (
                                <View key={i} style={styles.linhaBullet}>
                                    <Text style={styles.bullet}>●</Text>
                                    <Text style={styles.textoXP} hyphenationCallback={(word) => [word]}>
                                        {atividade}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            )}

            {/* Idiomas */}
            {dados.idiomas.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.titulo}>IDIOMAS</Text>
                    {dados.idiomas.map((idiomaObj, index) => (
                        <Text key={index} style={styles.texto}>
                            {idiomaObj.idioma} - {idiomaObj.nivel}
                        </Text>
                    ))}
                </View>
            )}

            {/* Formação Complementar */}
            {dados.cursosComplementares.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.titulo}>FORMAÇÃO COMPLEMENTAR</Text>
                    {dados.cursosComplementares.map((curso, index) => (
                        <View key={index} style={styles.linhaBullet}>
                            <Text style={styles.bullet}>●</Text>
                            <Text style={styles.texto}>
                                <Text style={{ fontWeight: "bold" }}>{curso.nome}</Text> 
                                ({curso.curso}) - {curso.cargaHoraria}h
                            </Text>
                        </View>
                    ))}
                </View>
            )}

        </Page>
    </Document>
);

export default CurriculoPDF;