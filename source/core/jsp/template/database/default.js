//
// 默认代码模板
//
// @params
// :encode  SHELL编码
// :conn    数据库连接字符串
// :sql     执行SQL语句
// :db      数据库名
// :table   表名

module.exports = () => ({
  show_databases: {
    _: 'yv66vgAAADIA/AoATABwBwBxCgACAHIKAAIAcwgATQsAdAB1CAB2CQBLAHcIAHgIAHkJAEsAegcAewoADAB8CAB9CwB+AH8LAHQAgAsAfgCABwCBCgASAHAIAIIKABIAgwoAEgCECgBLAIUKAEsAhggAhwgAiAoADACJCgBLAIoKAAwAhAgAiwoAAgCMCgCNAI4HAI8IAJAKACEAhAgAkQoAJgCSBwCTCgAmAJQKACYAlQgAlggAlwoAJgCYBwCZCgAmAJoKACwAmwoAJgCcCgAmAJ0KABIAnggAnwoALACgCgAsAKEIAKIHAKMKADYAcAoANgCkCgAmAKUIAKYIAKcKACYAqAoAJgCpCgCqAKsIAKwKAK0ArgsArwCwCwCxALILALMAtAsAtQC2CwC1ALcLALMAuAsAswC5CAC6CAC7CgBLALwHAGwHAL0BAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQANU3RhY2tNYXBUYWJsZQcAbAcAvQcAcQcAvgcAvwcAbAcAkwcAewcAjwEAAkVDAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAGZGVjb2RlBwCZAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwcAwAcAwQcAwgcAwwcAxAEADXNob3dEYXRhYmFzZXMBADgoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEAClNvdXJjZUZpbGUBABJzaG93RGF0YWJhc2VzLmphdmEMAFAAUQEAHWphdmF4L3NlcnZsZXQvanNwL1BhZ2VDb250ZXh0DADFAMYMAMcAyAcAvgwAyQBhAQAADABNAE4BAAdjaGFyc2V0AQAFVVRGLTgMAE8ATgEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIMAFAAygEACXRleHQvaHRtbAcAvwwAywDKDADMAMoBABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEABHZhcjAMAM0AzgwAzwDQDABjAGEMAGAAYQEABHZhcjEBAAMtPnwMAM0A0QwAbABtAQADfDwtDADSANMHANQMANUAygEAE2phdmEvbGFuZy9FeGNlcHRpb24BAAlFUlJPUjovLyABAANoZXgMAFQAVQEAEGphdmEvbGFuZy9TdHJpbmcMANYA1wwAUADYAQAEbnVsbAEAEDAxMjM0NTY3ODlBQkNERUYMANkA0AEAHWphdmEvaW8vQnl0ZUFycmF5T3V0cHV0U3RyZWFtDADaANsMAFAA3AwA3QDeDADfAOAMAM0A4QEAASwMAOIA3AwAzwBhAQAGYmFzZTY0AQAWc3VuL21pc2MvQkFTRTY0RGVjb2RlcgwA4wDkDADlANABAAINCgEAAQoMAOYA5wwA6ADpBwDqDADrAOwBABMmY2hhcmFjdGVyRW5jb2Rpbmc9BwDtDADuAO8HAMEMAPAA8QcAwgwA8gDzBwDDDAD0APUHAMQMAPYA2wwA9wD4DAD5APoMAPsA+AEADnNob3cgZGF0YWJhc2VzAQABCQwAZQBmAQAQamF2YS9sYW5nL09iamVjdAEAHGphdmF4L3NlcnZsZXQvU2VydmxldFJlcXVlc3QBAB1qYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXNwb25zZQEAE1tMamF2YS9sYW5nL1N0cmluZzsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQASamF2YS9zcWwvU3RhdGVtZW50AQASamF2YS9zcWwvUmVzdWx0U2V0AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAApnZXRSZXF1ZXN0AQAgKClMamF2YXgvc2VydmxldC9TZXJ2bGV0UmVxdWVzdDsBAAtnZXRSZXNwb25zZQEAISgpTGphdmF4L3NlcnZsZXQvU2VydmxldFJlc3BvbnNlOwEADGdldFBhcmFtZXRlcgEAFShMamF2YS9sYW5nL1N0cmluZzspVgEADnNldENvbnRlbnRUeXBlAQAUc2V0Q2hhcmFjdGVyRW5jb2RpbmcBAAZhcHBlbmQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAAZnZXRPdXQBAB8oKUxqYXZheC9zZXJ2bGV0L2pzcC9Kc3BXcml0ZXI7AQAbamF2YXgvc2VydmxldC9qc3AvSnNwV3JpdGVyAQAFcHJpbnQBAAhnZXRCeXRlcwEABCgpW0IBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEAC3RvVXBwZXJDYXNlAQAGbGVuZ3RoAQADKClJAQAEKEkpVgEABmNoYXJBdAEABChJKUMBAAdpbmRleE9mAQAEKEkpSQEAHChJKUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAV3cml0ZQEADGRlY29kZUJ1ZmZlcgEAFihMamF2YS9sYW5nL1N0cmluZzspW0IBAAR0cmltAQAHcmVwbGFjZQEARChMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTtMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTspTGphdmEvbGFuZy9TdHJpbmc7AQAFc3BsaXQBACcoTGphdmEvbGFuZy9TdHJpbmc7KVtMamF2YS9sYW5nL1N0cmluZzsBAA9qYXZhL2xhbmcvQ2xhc3MBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAFmphdmEvc3FsL0RyaXZlck1hbmFnZXIBAA1nZXRDb25uZWN0aW9uAQApKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvQ29ubmVjdGlvbjsBAA9jcmVhdGVTdGF0ZW1lbnQBABYoKUxqYXZhL3NxbC9TdGF0ZW1lbnQ7AQAMZXhlY3V0ZVF1ZXJ5AQAoKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvUmVzdWx0U2V0OwEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAOZ2V0Q29sdW1uQ291bnQBAA1nZXRDb2x1bW5OYW1lAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQAEbmV4dAEAAygpWgEACWdldFN0cmluZwAh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',
    'var0': '#{encode}',
    'var1': '#{conn}'
  },
  show_tables: {
    _: 'yv66vgAAADIA/goATQBxBwByCgACAHMKAAIAdAgATgsAdQB2CAB3CQBMAHgIAHkIAHoJAEwAewcAfAoADAB9CAB+CwB/AIALAHUAgQsAfwCBBwCCCgASAHEIAIMKABIAhAoAEgCFCgBMAIYKAEwAhwgAiAgAiQgAigoADACLCgBMAIwKAAwAhQgAjQoAAgCOCgCPAJAHAJEIAJIKACIAhQgAkwoAJwCUBwCVCgAnAJYKACcAlwgAmAgAmQoAJwCaBwCbCgAnAJwKAC0AnQoAJwCeCgAnAJ8KABIAoAgAoQoALQCiCgAtAKMIAKQHAKUKADcAcQoANwCmCgAnAKcIAKgIAKkKACcAqgoAJwCrCgCsAK0IAK4KAK8AsAsAsQCyCwCzALQLALUAtgsAtwC4CwC3ALkLALUAugsAtQC7CAC8CAC9CgBMAL4HAG0HAL8BAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQANU3RhY2tNYXBUYWJsZQcAbQcAvwcAcgcAwAcAwQcAbQcAlQcAfAcAkQEAAkVDAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAGZGVjb2RlBwCbAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwcAwgcAwwcAxAcAxQcAxgEACnNob3dUYWJsZXMBAEooTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEAClNvdXJjZUZpbGUBAA9zaG93VGFibGVzLmphdmEMAFEAUgEAHWphdmF4L3NlcnZsZXQvanNwL1BhZ2VDb250ZXh0DADHAMgMAMkAygcAwAwAywBiAQAADABOAE8BAAdjaGFyc2V0AQAFVVRGLTgMAFAATwEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIMAFEAzAEACXRleHQvaHRtbAcAwQwAzQDMDADOAMwBABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEABHZhcjAMAM8A0AwA0QDSDABkAGIMAGEAYgEABHZhcjEBAAR2YXIyAQADLT58DADPANMMAG0AbgEAA3w8LQwA1ADVBwDWDADXAMwBABNqYXZhL2xhbmcvRXhjZXB0aW9uAQAJRVJST1I6Ly8gAQADaGV4DABVAFYBABBqYXZhL2xhbmcvU3RyaW5nDADYANkMAFEA2gEABG51bGwBABAwMTIzNDU2Nzg5QUJDREVGDADbANIBAB1qYXZhL2lvL0J5dGVBcnJheU91dHB1dFN0cmVhbQwA3ADdDABRAN4MAN8A4AwA4QDiDADPAOMBAAEsDADkAN4MANEAYgEABmJhc2U2NAEAFnN1bi9taXNjL0JBU0U2NERlY29kZXIMAOUA5gwA5wDSAQACDQoBAAEKDADoAOkMAOoA6wcA7AwA7QDuAQATJmNoYXJhY3RlckVuY29kaW5nPQcA7wwA8ADxBwDDDADyAPMHAMQMAPQA9QcAxQwA9gD3BwDGDAD4AN0MAPkA+gwA+wD8DAD9APoBABFzaG93IHRhYmxlcyBmcm9tIAEAAQkMAGYAZwEAEGphdmEvbGFuZy9PYmplY3QBABxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXF1ZXN0AQAdamF2YXgvc2VydmxldC9TZXJ2bGV0UmVzcG9uc2UBABNbTGphdmEvbGFuZy9TdHJpbmc7AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAEmphdmEvc3FsL1N0YXRlbWVudAEAEmphdmEvc3FsL1Jlc3VsdFNldAEAGmphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhAQAKZ2V0UmVxdWVzdAEAICgpTGphdmF4L3NlcnZsZXQvU2VydmxldFJlcXVlc3Q7AQALZ2V0UmVzcG9uc2UBACEoKUxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXNwb25zZTsBAAxnZXRQYXJhbWV0ZXIBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAGYXBwZW5kAQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAGZ2V0T3V0AQAfKClMamF2YXgvc2VydmxldC9qc3AvSnNwV3JpdGVyOwEAG2phdmF4L3NlcnZsZXQvanNwL0pzcFdyaXRlcgEABXByaW50AQAIZ2V0Qnl0ZXMBAAQoKVtCAQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBAAt0b1VwcGVyQ2FzZQEABmxlbmd0aAEAAygpSQEABChJKVYBAAZjaGFyQXQBAAQoSSlDAQAHaW5kZXhPZgEABChJKUkBABwoSSlMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAFd3JpdGUBAAxkZWNvZGVCdWZmZXIBABYoTGphdmEvbGFuZy9TdHJpbmc7KVtCAQAEdHJpbQEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAPamF2YS9sYW5nL0NsYXNzAQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBABZqYXZhL3NxbC9Ecml2ZXJNYW5hZ2VyAQANZ2V0Q29ubmVjdGlvbgEAKShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL0Nvbm5lY3Rpb247AQAPY3JlYXRlU3RhdGVtZW50AQAWKClMamF2YS9zcWwvU3RhdGVtZW50OwEADGV4ZWN1dGVRdWVyeQEAKChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL1Jlc3VsdFNldDsBAAtnZXRNZXRhRGF0YQEAHigpTGphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhOwEADmdldENvbHVtbkNvdW50AQANZ2V0Q29sdW1uTmFtZQEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEA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',
    'var0': '#{encode}',
    'var1': '#{conn}',
    'var2': '#{db}'
  },
  show_columns: {
    _: 'yv66vgAAADIBBAoAUAB0BwB1CgACAHYKAAIAdwgAUQsAeAB5CAB6CQBPAHsIAHwIAH0JAE8AfgcAfwoADACACACBCwCCAIMLAHgAhAsAggCEBwCFCgASAHQIAIYKABIAhwoAEgCICgBPAIkKAE8AiggAiwgAjAgAjQgAjgoADACPCgBPAJAKAAwAiAgAkQoAAgCSCgCTAJQHAJUIAJYKACMAiAgAlwoAKACYBwCZCgAoAJoKACgAmwgAnAgAnQoAKACeBwCfCgAoAKAKAC4AoQoAKACiCgAoAKMKABIApAgApQoALgCmCgAuAKcIAKgHAKkKADgAdAoAOACqCgAoAKsIAKwIAK0KACgArgoAKACvCgCwALEIALIKALMAtAsAtQC2CwC3ALgLALkAugsAuwC8CwC7AL0LALkAvgsAuQC/CADACADBCADCCADDCgBPAMQHAHAHAMUBAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQANU3RhY2tNYXBUYWJsZQcAcAcAxQcAdQcAxgcAxwcAcAcAmQcAfwcAlQEAAkVDAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAGZGVjb2RlBwCfAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwcAyAcAyQcAygcAywcAzAEAC3Nob3dDb2x1bW5zAQBcKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApTb3VyY2VGaWxlAQAQc2hvd0NvbHVtbnMuamF2YQwAVABVAQAdamF2YXgvc2VydmxldC9qc3AvUGFnZUNvbnRleHQMAM0AzgwAzwDQBwDGDADRAGUBAAAMAFEAUgEAB2NoYXJzZXQBAAVVVEYtOAwAUwBSAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgwAVADSAQAJdGV4dC9odG1sBwDHDADTANIMANQA0gEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAEdmFyMAwA1QDWDADXANgMAGcAZQwAZABlAQAEdmFyMQEABHZhcjIBAAR2YXIzAQADLT58DADVANkMAHAAcQEAA3w8LQwA2gDbBwDcDADdANIBABNqYXZhL2xhbmcvRXhjZXB0aW9uAQAJRVJST1I6Ly8gAQADaGV4DABYAFkBABBqYXZhL2xhbmcvU3RyaW5nDADeAN8MAFQA4AEABG51bGwBABAwMTIzNDU2Nzg5QUJDREVGDADhANgBAB1qYXZhL2lvL0J5dGVBcnJheU91dHB1dFN0cmVhbQwA4gDjDABUAOQMAOUA5gwA5wDoDADVAOkBAAEsDADqAOQMANcAZQEABmJhc2U2NAEAFnN1bi9taXNjL0JBU0U2NERlY29kZXIMAOsA7AwA7QDYAQACDQoBAAEKDADuAO8MAPAA8QcA8gwA8wD0AQATJmNoYXJhY3RlckVuY29kaW5nPQcA9QwA9gD3BwDJDAD4APkHAMoMAPoA+wcAywwA/AD9BwDMDAD+AOMMAP8BAAwBAQECDAEDAQABAAEJAQAOc2VsZWN0ICogZnJvbSABAAEuAQAKIGxpbWl0IDAsMAwAaQBqAQAQamF2YS9sYW5nL09iamVjdAEAHGphdmF4L3NlcnZsZXQvU2VydmxldFJlcXVlc3QBAB1qYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXNwb25zZQEAE1tMamF2YS9sYW5nL1N0cmluZzsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQASamF2YS9zcWwvU3RhdGVtZW50AQASamF2YS9zcWwvUmVzdWx0U2V0AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAApnZXRSZXF1ZXN0AQAgKClMamF2YXgvc2VydmxldC9TZXJ2bGV0UmVxdWVzdDsBAAtnZXRSZXNwb25zZQEAISgpTGphdmF4L3NlcnZsZXQvU2VydmxldFJlc3BvbnNlOwEADGdldFBhcmFtZXRlcgEAFShMamF2YS9sYW5nL1N0cmluZzspVgEADnNldENvbnRlbnRUeXBlAQAUc2V0Q2hhcmFjdGVyRW5jb2RpbmcBAAZhcHBlbmQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAAZnZXRPdXQBAB8oKUxqYXZheC9zZXJ2bGV0L2pzcC9Kc3BXcml0ZXI7AQAbamF2YXgvc2VydmxldC9qc3AvSnNwV3JpdGVyAQAFcHJpbnQBAAhnZXRCeXRlcwEABCgpW0IBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEAC3RvVXBwZXJDYXNlAQAGbGVuZ3RoAQADKClJAQAEKEkpVgEABmNoYXJBdAEABChJKUMBAAdpbmRleE9mAQAEKEkpSQEAHChJKUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAV3cml0ZQEADGRlY29kZUJ1ZmZlcgEAFihMamF2YS9sYW5nL1N0cmluZzspW0IBAAR0cmltAQAHcmVwbGFjZQEARChMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTtMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTspTGphdmEvbGFuZy9TdHJpbmc7AQAFc3BsaXQBACcoTGphdmEvbGFuZy9TdHJpbmc7KVtMamF2YS9sYW5nL1N0cmluZzsBAA9qYXZhL2xhbmcvQ2xhc3MBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAFmphdmEvc3FsL0RyaXZlck1hbmFnZXIBAA1nZXRDb25uZWN0aW9uAQApKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvQ29ubmVjdGlvbjsBAA9jcmVhdGVTdGF0ZW1lbnQBABYoKUxqYXZhL3NxbC9TdGF0ZW1lbnQ7AQAMZXhlY3V0ZVF1ZXJ5AQAoKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvUmVzdWx0U2V0OwEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAOZ2V0Q29s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',
    'var0': '#{encode}',
    'var1': '#{conn}',
    'var2': '#{db}',
    'var3': '#{table}'
  },
  query: {
    _: 'yv66vgAAADIA/AoATABwBwBxCgACAHIKAAIAcwgATQsAdAB1CAB2CQBLAHcIAHgIAHkJAEsAegcAewoADAB8CAB9CwB+AH8LAHQAgAsAfgCABwCBCgASAHAIAIIKABIAgwoAEgCECgBLAIUKAEsAhggAhwgAiAgAiQoADACKCgBLAIsKAAwAhAgAjAoAAgCNCgCOAI8HAJAIAJEKACIAhAgAkgoAJwCTBwCUCgAnAJUKACcAlggAlwgAmAoAJwCZBwCaCgAnAJsKAC0AnAoAJwCdCgAnAJ4KABIAnwgAoAoALQChCgAtAKIIAKMHAKQKADcAcAoANwClCgAnAKYIAKcIAKgKACcAqQoAJwCqCgCrAKwIAK0KAK4ArwsAsACxCwCyALMLALQAtQsAtgC3CwC2ALgLALQAuQsAtAC6CAC7CgBLALwHAGwHAL0BAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQANU3RhY2tNYXBUYWJsZQcAbAcAvQcAcQcAvgcAvwcAbAcAlAcAewcAkAEAAkVDAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAGZGVjb2RlBwCaAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwcAwAcAwQcAwgcAwwcAxAEABXF1ZXJ5AQBKKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApTb3VyY2VGaWxlAQAKcXVlcnkuamF2YQwAUABRAQAdamF2YXgvc2VydmxldC9qc3AvUGFnZUNvbnRleHQMAMUAxgwAxwDIBwC+DADJAGEBAAAMAE0ATgEAB2NoYXJzZXQBAAVVVEYtOAwATwBOAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgwAUADKAQAJdGV4dC9odG1sBwC/DADLAMoMAMwAygEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAEdmFyMAwAzQDODADPANAMAGMAYQwAYABhAQAEdmFyMQEABHZhcjIBAAMtPnwMAM0A0QwAbABtAQADfDwtDADSANMHANQMANUAygEAE2phdmEvbGFuZy9FeGNlcHRpb24BAAlFUlJPUjovLyABAANoZXgMAFQAVQEAEGphdmEvbGFuZy9TdHJpbmcMANYA1wwAUADYAQAEbnVsbAEAEDAxMjM0NTY3ODlBQkNERUYMANkA0AEAHWphdmEvaW8vQnl0ZUFycmF5T3V0cHV0U3RyZWFtDADaANsMAFAA3AwA3QDeDADfAOAMAM0A4QEAASwMAOIA3AwAzwBhAQAGYmFzZTY0AQAWc3VuL21pc2MvQkFTRTY0RGVjb2RlcgwA4wDkDADlANABAAINCgEAAQoMAOYA5wwA6ADpBwDqDADrAOwBABMmY2hhcmFjdGVyRW5jb2Rpbmc9BwDtDADuAO8HAMEMAPAA8QcAwgwA8gDzBwDDDAD0APUHAMQMAPYA2wwA9wD4DAD5APoMAPsA+AEAAwl8CQwAZQBmAQAQamF2YS9sYW5nL09iamVjdAEAHGphdmF4L3NlcnZsZXQvU2VydmxldFJlcXVlc3QBAB1qYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXNwb25zZQEAE1tMamF2YS9sYW5nL1N0cmluZzsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQASamF2YS9zcWwvU3RhdGVtZW50AQASamF2YS9zcWwvUmVzdWx0U2V0AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAApnZXRSZXF1ZXN0AQAgKClMamF2YXgvc2VydmxldC9TZXJ2bGV0UmVxdWVzdDsBAAtnZXRSZXNwb25zZQEAISgpTGphdmF4L3NlcnZsZXQvU2VydmxldFJlc3BvbnNlOwEADGdldFBhcmFtZXRlcgEAFShMamF2YS9sYW5nL1N0cmluZzspVgEADnNldENvbnRlbnRUeXBlAQAUc2V0Q2hhcmFjdGVyRW5jb2RpbmcBAAZhcHBlbmQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAAZnZXRPdXQBAB8oKUxqYXZheC9zZXJ2bGV0L2pzcC9Kc3BXcml0ZXI7AQAbamF2YXgvc2VydmxldC9qc3AvSnNwV3JpdGVyAQAFcHJpbnQBAAhnZXRCeXRlcwEABCgpW0IBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEAC3RvVXBwZXJDYXNlAQAGbGVuZ3RoAQADKClJAQAEKEkpVgEABmNoYXJBdAEABChJKUMBAAdpbmRleE9mAQAEKEkpSQEAHChJKUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAV3cml0ZQEADGRlY29kZUJ1ZmZlcgEAFihMamF2YS9sYW5nL1N0cmluZzspW0IBAAR0cmltAQAHcmVwbGFjZQEARChMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTtMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTspTGphdmEvbGFuZy9TdHJpbmc7AQAFc3BsaXQBACcoTGphdmEvbGFuZy9TdHJpbmc7KVtMamF2YS9sYW5nL1N0cmluZzsBAA9qYXZhL2xhbmcvQ2xhc3MBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAFmphdmEvc3FsL0RyaXZlck1hbmFnZXIBAA1nZXRDb25uZWN0aW9uAQApKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvQ29ubmVjdGlvbjsBAA9jcmVhdGVTdGF0ZW1lbnQBABYoKUxqYXZhL3NxbC9TdGF0ZW1lbnQ7AQAMZXhlY3V0ZVF1ZXJ5AQAoKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvUmVzdWx0U2V0OwEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAOZ2V0Q29sdW1uQ291bnQBAA1nZXRDb2x1bW5OYW1lAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQAEbmV4dAEAAygpWgEACWdldFN0cmluZwAhAEsATAAA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',
    'var0': '#{encode}',
    'var1': '#{conn}',
    'var2': '#{sql}'
  }
})